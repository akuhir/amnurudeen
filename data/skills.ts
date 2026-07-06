export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "ai";
}

export const skills: Skill[] = [
  { name: "HTML", category: "language" },
  { name: "CSS", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Tailwind CSS", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Firebase", category: "tool" },
  { name: "Supabase", category: "tool" },
  { name: "Git", category: "tool" },
  { name: "GitHub", category: "tool" },
  { name: "Cursor", category: "ai" },
  { name: "Claude Code", category: "ai" },
  { name: "ChatGPT", category: "ai" },
  { name: "Figma", category: "tool" },
];
