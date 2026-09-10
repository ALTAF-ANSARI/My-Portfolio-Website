import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose ?? { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

// NOTE: this used to `throw` at module-load time if MONGODB_URI was missing,
// which crashed the whole route before it could even try a fallback. Now the
// error only surfaces when something actually tries to connect, so callers
// (see /api/contact) can catch it and degrade gracefully instead of 500ing.
async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not set — define it in .env.local (see .env.example).");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const opts = { bufferCommands: false, serverSelectionTimeoutMS: 5000 };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
