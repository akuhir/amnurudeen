export interface TimelineItem {
  title: string;
  description: string;
  active: boolean;
}

export const timeline: TimelineItem[] = [
  {
    title: "Building Campora",
    description:
      "Designing and developing a social platform for students, staff, and alumni to connect in one place.",
    active: true,
  },
  {
    title: "Learning advanced AI development workflows",
    description:
      "Exploring agentic coding, prompt engineering, and AI-assisted development to ship faster and smarter.",
    active: true,
  },
  {
    title: "Improving full-stack development skills",
    description:
      "Deepening my knowledge of scalable architecture, performance, and clean, maintainable code.",
    active: true,
  },
  {
    title: "Open to freelance opportunities and collaborations",
    description:
      "Available for select freelance projects and collaborations — reach out if we should build something.",
    active: true,
  },
];
