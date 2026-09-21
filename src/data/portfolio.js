// ============================================================
//  CENTRALIZED PORTFOLIO DATA — Altaf Ansari
//  Sourced directly from resume (Altaf_12404566__Recent.pdf)
//  and live GitHub profile (github.com/ALTAF-ANSARI)
// ============================================================

export const personal = {
  name: "Altaf Ansari",
  title: "Full Stack & Generative AI Engineer",
  tagline: "B.Tech CSE @ Lovely Professional University | Passionate about building scalable web applications, AI-powered products and solving real-world problems through code.",
  email: "altafansar915@gmail.com",
  phone: "+91 8210554663",
  github: "https://github.com/ALTAF-ANSARI",
  linkedin: "https://linkedin.com/in/altafansari0011/",
  resume: "/resume.pdf",
  locationShort: "Based in India",
  // TODO: add your real LeetCode profile URL, e.g. "https://leetcode.com/u/yourhandle/"
  // Left blank until provided — the UI hides the link rather than pointing it at a broken URL.
  leetcode: "https://leetcode.com/u/2802_ALTAF/",
  // Same treatment for X/Instagram — add real profile URLs here when you have
  // them and the icons will appear automatically; until then they're hidden
  // rather than linking to "#".
  x: "https://x.com/Altaf____Ansari",
  instagram: "",
};

export const stats = [
  { label: "DSA Problems Solved", value: 400, suffix: "+", icon: "code" },
  { label: "Full Stack Projects", value: 3, suffix: "+", icon: "box" },
  { label: "CGPA (LPU)", value: 8.58, suffix: "", decimals: 2, icon: "star" },
  { label: "To Opportunities", value: "Open", isText: true, icon: "briefcase" },
];

// Skill categories mirror the resume's own groupings exactly.
// icon = devicon class (colored "-original"/"-plain-wordmark" variants used
// wherever the tech has an official brand color, so the badges are colored
// like the reference design rather than flat single-tone icons).
export const skills = {
  All: [], // populated below programmatically-equivalent (kept explicit for clarity)
  Languages: [
    { name: "C", icon: "devicon-c-original" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
  ],
  "Web Technologies": [
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
    { name: "React.js", icon: "devicon-react-original" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Express.js", icon: "devicon-express-original" },
  ],
  "Core Concepts & Databases": [
    { name: "DBMS", icon: "devicon-mysql-plain" },
    { name: "DSA", icon: "devicon-cplusplus-plain" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
    { name: "Docker", icon: "devicon-docker-plain" },
    { name: "Jira", icon: "devicon-jira-plain" },
  ],
};
// Flatten for the "All" tab so every resume skill shows up there too.
skills.All = [
  ...skills.Languages,
  ...skills["Web Technologies"],
  ...skills["Core Concepts & Databases"],
  ...skills["Tools & Platforms"],
];

// Resume "Soft Skills" line — shown as plain tags under the tech grid.
export const softSkills = ["Problem-Solving", "Communication", "Adaptability", "Teamwork"];

// ------------------------------------------------------------
// PROJECTS
// Pulled from the live GitHub account (github.com/ALTAF-ANSARI),
// not just resume text, per your request that project links be
// real and functional. Two notes on differences from the resume:
//
// 1. The resume lists "InterviewPrep AI" as a project, but there is
//    no public repo for it on the GitHub account — so it's swapped
//    here for "Student Management System", which IS a real, public,
//    fully-authored repo (built for the LPU BDSA course).
// 2. "MindForum" on GitHub is a fork of asmitt2903/MindForum_A_Question_Platform,
//    not an original repo — labeled honestly below as a fork/collaboration.
// ------------------------------------------------------------
export const projects = [
  {
    id: 1,
    name: "LinguaFlow",
    subtitle: "Dynamic Language Translator",
    description: "Full-stack translator supporting 12+ languages with authentication and translation history. Integrates Google Gemini API for AI-powered language processing.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    github: "https://github.com/ALTAF-ANSARI/universal-translator-ai",
    demo: "",
    isFork: false,
  },
  {
    id: 2,
    name: "MindForum",
    subtitle: "Knowledge Sharing Q&A Platform",
    description: "Quora-style platform for posting, answering and discussing questions, integrated with Hugging Face LLMs for Markdown answers. Forked and extended from a collaborative base repo.",
    tech: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/ALTAF-ANSARI/MindForum_A_Question_Platform",
    demo: "",
    isFork: true,
    forkedFrom: "asmitt2903/MindForum_A_Question_Platform",
  },
  {
    id: 3,
    name: "Student Management System",
    subtitle: "Advanced Student Record System (C++ / DSA)",
    description: "Console-based student record system built from scratch in C++ — no STL containers. Implements linked lists, a stack for undo, a queue for recent searches, bubble/selection sort and file persistence.",
    tech: ["C++", "OOP", "Data Structures", "File I/O"],
    github: "https://github.com/ALTAF-ANSARI/Student-Management-System",
    demo: "",
    isFork: false,
  },
];

// ------------------------------------------------------------
// EDUCATION & TRAINING — exact from resume
// ------------------------------------------------------------
export const education = [
  {
    id: 1,
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2024 – present",
    location: "Phagwara, Punjab",
    score: "CGPA: 8.58",
    color: "border-accent-green",
  },
  {
    id: 2,
    institution: "Basics of Data Structures and Algorithms — LPU (CPE)",
    degree: "Training · Certificate",
    period: "June – July 2026",
    location: "Phagwara, Punjab",
    score: "Built Advanced Student Management System (C++)",
    color: "border-gray-600",
  },
  {
    id: 3,
    institution: "St. Paul's College",
    degree: "Intermediate",
    period: "2022 – 2024",
    location: "Ranchi, Jharkhand",
    score: "Percentage: 80.8",
    color: "border-gray-600",
  },
  {
    id: 4,
    institution: "Oxbridge School Mandar",
    degree: "Matriculation",
    period: "2021 – 2022",
    location: "Ranchi, Jharkhand",
    score: "Percentage: 89.2",
    color: "border-gray-600",
  },
];

// ------------------------------------------------------------
// ACHIEVEMENTS — exact from resume's "Extracurricular / Achievement" section
// ------------------------------------------------------------
export const achievements = [
  {
    id: 1,
    icon: "award",
    title: "400+",
    subtitle: "DSA Problems Solved (LeetCode & GFG)",
  },
  {
    id: 2,
    icon: "box",
    title: "3",
    subtitle: "Public GitHub Projects",
  },
  {
    id: 3,
    icon: "certificate",
    title: "4",
    subtitle: "Certifications Earned",
  },
  {
    id: 4,
    icon: "zap",
    title: "Campus Ambassador",
    subtitle: "Jyesta Corporate Entity",
  },
];

// Resume "Certificates" section — exact
export const certificates = [
  { title: "AI Tools Workshop", issuer: "be10x", date: "August 2026" },
  { title: "Introduction to Generative AI", issuer: "Simplilearn", date: "July 2026" },
  { title: "Programming Using C++", issuer: "Infosys Springboard", date: "August 2025" },
  { title: "Computer Programming (C)", issuer: "Iamneo", date: "" },
];

export const currentlyExploring = [
  "System Design & Scalable Architecture",
  "Generative AI & LLM Applications",
  "Open Source Contributions",
  "Building impactful products",
];
