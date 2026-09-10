import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

// Rate limiting (simple in-memory store — use Redis in production)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 submissions per minute per IP

function sanitizeString(str) {
  return str
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/['"`;\\/]/g, "") // strip common injection chars
    .trim();
}

function getRateLimitKey(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0] : "unknown";
}

// Best-effort fallback so a submission is never silently dropped just
// because MONGODB_URI isn't configured yet (e.g. during local setup) or the
// database is briefly unreachable. Writes to /tmp, which exists on Vercel
// and most serverless hosts too — but it is NOT durable storage (it can be
// wiped between invocations/deploys). This exists purely so the visitor's
// submission isn't lost mid-testing and so you have something to check in
// server logs; it is not a substitute for a real MONGODB_URI in production.
async function writeFallback(data) {
  const dir = path.join("/tmp", "portfolio-contact-fallback");
  const file = path.join(dir, "submissions.jsonl");
  await mkdir(dir, { recursive: true });
  const line = JSON.stringify({ ...data, receivedAt: new Date().toISOString() }) + "\n";
  await appendFile(file, line, "utf8");
  return file;
}

function checkRateLimit(key) {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(key, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) return false;

  record.count += 1;
  return true;
}

export async function POST(req) {
  try {
    const rateLimitKey = getRateLimitKey(req);
    if (!checkRateLimit(rateLimitKey)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, email, subject, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2)
      return NextResponse.json({ error: "Name must be at least 2 characters." }, { status: 400 });
    if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email.trim()))
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    if (!subject || typeof subject !== "string" || subject.trim().length < 3)
      return NextResponse.json({ error: "Subject must be at least 3 characters." }, { status: 400 });
    if (!message || typeof message !== "string" || message.trim().length < 10)
      return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });

    const sanitizedData = {
      name: sanitizeString(String(name)).slice(0, 100),
      email: sanitizeString(String(email)).toLowerCase().slice(0, 254),
      subject: sanitizeString(String(subject)).slice(0, 200),
      message: sanitizeString(String(message)).slice(0, 2000),
    };

    let savedId = null;
    let persistedToDb = true;

    try {
      await connectDB();
      const contact = await Contact.create(sanitizedData);
      savedId = contact._id;
    } catch (dbError) {
      // A real ValidationError means the data itself is bad (shouldn't
      // normally happen since we validate above, but just in case) — that's
      // not an infra problem, so surface it properly instead of falling back.
      if (dbError && dbError.name === "ValidationError") {
        const firstError = Object.values(dbError.errors)[0];
        return NextResponse.json({ error: firstError.message }, { status: 400 });
      }

      // Otherwise it's a connection/infra problem (no MONGODB_URI yet, or
      // unreachable) — don't fail the visitor's submission for something
      // that's on us, not them. Log it and fall back to a local record.
      console.error("[Contact API] DB write failed, using fallback store:", dbError.message);
      persistedToDb = false;
      try {
        await writeFallback(sanitizedData);
      } catch (fallbackError) {
        console.error("[Contact API] Fallback write also failed:", fallbackError.message);
        return NextResponse.json(
          { error: "Something went wrong. Please try again later, or email me directly." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks for reaching out! I'll get back to you soon.",
        id: savedId,
        persistedToDb,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);

    if (error && typeof error === "object" && error.name === "ValidationError") {
      const firstError = Object.values(error.errors)[0];
      return NextResponse.json({ error: firstError.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
