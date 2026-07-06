export type ProjectStatus = "building" | "live" | "completed";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    apk?: string;
  };
  image?: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "campora",
    name: "Campora",
    tagline: "One community for an entire campus",
    description:
      "A modern social platform connecting students, staff, alumni, and prospective students in one community. Campora brings campus life online — announcements, groups, and conversations in a single, focused space.",
    status: "building",
    statusLabel: "Currently Building",
    featured: true,
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: {},
    comingSoon: true,
  },
  {
    slug: "class-website",
    name: "Class Website",
    tagline: "Communication, organized",
    description:
      "A fully functional website built for my class to improve communication and information sharing — announcements, resources, and schedules in one reliable place instead of scattered chat threads.",
    status: "live",
    statusLabel: "Live Project",
    featured: false,
    tags: ["React", "Next.js", "Tailwind CSS"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    slug: "naira-tracker",
    name: "Naira Tracker",
    tagline: "Personal finance, simplified",
    description:
      "A fully working personal finance application that helps users track income, expenses, and balances through a simple and intuitive interface. Built to make everyday money management effortless.",
    status: "completed",
    statusLabel: "Completed · Android APK",
    featured: false,
    tags: ["Android", "Kotlin", "Firebase"],
    links: {
      apk: "#",
    },
  },
];
