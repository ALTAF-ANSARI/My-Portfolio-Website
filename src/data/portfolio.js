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
  leetcode: "https://leetcode.com/u/2802_ALTAF/",
  x: "https://x.com/Altaf____Ansari",
  instagram: "",
};

export const stats = [
  { label: "DSA Problems Solved", value: 400, suffix: "+", icon: "code" },
  { label: "Full Stack Projects", value: 3, suffix: "+", icon: "box" },
  { label: "CGPA (LPU)", value: 8.58, suffix: "", decimals: 2, icon: "star" },
  { label: "To Opportunities", value: "Open", isText: true, icon: "briefcase" },
];

// Each skill includes its official documentation URL so the skill card is
// directly useful as a learning/reference shortcut.
export const skills = {
  All: [],
  Languages: [
    { name: "C", icon: "devicon-c-original", docs: "https://www.gnu.org/software/c-intro-and-ref/manual/c-intro-and-ref.html" },
    { name: "C++", icon: "devicon-cplusplus-plain", docs: "https://isocpp.org/get-started" },
    { name: "Java", icon: "devicon-java-plain", docs: "https://dev.java/learn/" },
    { name: "JavaScript", icon: "devicon-javascript-plain", docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { name: "TypeScript", icon: "devicon-typescript-plain", docs: "https://www.typescriptlang.org/docs/handbook/" },
  ],
  "Web Technologies": [
    { name: "HTML5", icon: "devicon-html5-plain", docs: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", icon: "devicon-css3-plain", docs: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "React.js", icon: "devicon-react-original", docs: "https://react.dev/learn" },
    { name: "Next.js", icon: "devicon-nextjs-plain", docs: "https://nextjs.org/docs" },
    { name: "Node.js", icon: "devicon-nodejs-plain", docs: "https://nodejs.org/docs/latest/api/" },
    { name: "Express.js", icon: "devicon-express-original", docs: "https://expressjs.com/en/starter/installing.html" },
  ],
  "Core Concepts & Databases": [
    { name: "DBMS", icon: "devicon-mysql-plain", docs: "https://dev.mysql.com/doc/" },
    { name: "DSA", icon: "devicon-cplusplus-plain", docs: "https://en.cppreference.com/w/cpp.html" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", docs: "https://www.mongodb.com/docs/" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", docs: "https://www.postgresql.org/docs/current/" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "devicon-git-plain", docs: "https://git-scm.com/book/en/v2" },
    { name: "GitHub", icon: "devicon-github-original", docs: "https://docs.github.com/" },
    { name: "VS Code", icon: "devicon-vscode-plain", docs: "https://code.visualstudio.com/docs" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", docs: "https://docs.aws.amazon.com/getting-started/" },
    { name: "Docker", icon: "devicon-docker-plain", docs: "https://docs.docker.com/" },
    { name: "Jira", icon: "devicon-jira-plain", docs: "https://support.atlassian.com/jira/" },
  ],
};

skills.All = [
  ...skills.Languages,
  ...skills["Web Technologies"],
  ...skills["Core Concepts & Databases"],
  ...skills["Tools & Platforms"],
];

export const softSkills = ["Problem-Solving", "Communication", "Adaptability", "Teamwork"];

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
