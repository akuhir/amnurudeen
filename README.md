# Abubakar Nurudeen — Developer Portfolio

A premium, minimalist dark-themed portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

All copy lives in plain data files — no need to touch component code to
update text:

- `data/site.ts` — name, email, social links, footer quote
- `data/projects.ts` — project cards (Campora, Class Website, Naira Tracker)
- `data/skills.ts` — skills/tools grid
- `data/timeline.ts` — "Currently Building" timeline items

To add a project, add an entry to the `projects` array in `data/projects.ts`.
Set `featured: true` on at most one project — it renders in the large
featured card above the grid.

## Structure

```
app/
  layout.tsx       # Root layout, metadata, theme provider
  page.tsx         # Assembles all sections
  globals.css      # Design tokens, dark/light theme variables
  sitemap.ts        # SEO sitemap
  robots.ts         # SEO robots.txt
components/
  ui/              # Button, Badge, SectionHeading, brand icons, etc.
  sections/        # Navbar, Hero, About, Projects, Skills, Now, Contact, Footer
data/              # Content — edit here to update the site
hooks/
  use-theme.tsx    # Dark/light mode context
lib/
  utils.ts         # Small className helper
```

## Connecting a real GitHub contribution graph

The GitHub activity section (`components/sections/github-activity.tsx`)
currently renders placeholder data. To connect it to live data, swap the
`generateActivity` function for a fetch to a GitHub contributions API (for
example the unofficial `github-contributions-api` or your own serverless
function that queries GitHub's GraphQL API), and pass the real weekly grid
into the same rendering logic.

## Fonts

The site ships with a system-font stack (`Inter`, `-apple-system`, etc.) so it
works without any network calls. If you want the exact Inter / JetBrains Mono
webfonts, install them via `next/font/google` in `app/layout.tsx` — this
requires network access to Google Fonts at build time, which some sandboxed
environments don't have.

## Deployment

This project is ready to deploy to [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly in the Vercel dashboard — it will detect
Next.js automatically and no configuration is required.

## Tech stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React (icons)
