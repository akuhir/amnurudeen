import type { Metadata } from "next";
import { ThemeProvider } from "@/hooks/use-theme";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { LoadingScreen } from "@/components/ui/loading-screen";
import "./globals.css";

const siteUrl = "https://abubakarnurudeen.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abubakar Nurudeen — AI-Powered Full-Stack Developer",
  description:
    "Portfolio of Abubakar Nurudeen, an AI-Powered Full-Stack Developer building digital products that solve real-world problems. Explore projects including Campora, Class Website, and Naira Tracker.",
  keywords: [
    "Abubakar Nurudeen",
    "Full-Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Campora",
    "Portfolio",
  ],
  authors: [{ name: "Abubakar Nurudeen" }],
  openGraph: {
    title: "Abubakar Nurudeen — AI-Powered Full-Stack Developer",
    description:
      "Building digital products that solve real-world problems with modern web technologies and AI-assisted development.",
    url: siteUrl,
    siteName: "Abubakar Nurudeen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakar Nurudeen — AI-Powered Full-Stack Developer",
    description:
      "Building digital products that solve real-world problems with modern web technologies and AI-assisted development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-(--color-base)">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
