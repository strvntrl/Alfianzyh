# Alfianzyh — Portfolio

Personal portfolio of **Muhammad Alfiansyah**, Undergraduate Student of Information Systems —
Full-Stack Web2, Web3 & System Developer, Data Analyst & Business Intelligence.

Built with **Next.js (App Router)**, **React** and **TypeScript**.

## Pages

| Route        | Content                                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `/`          | Hero, services, stats, about teaser, 6 selected projects, "How I work"  |
| `/about`     | Story (Chapter 01–03), experience, education, certification, skills     |
| `/portfolio` | 18 projects with filters: Web3, Systems & Web Apps, Data & BI, Frontend |
| `/contact`   | Contact details, contact form (Formspree), FAQ                          |

Old URLs (`/index.html`, `/about.html`, `/portofolio.html`, `/contact.html`) redirect to the new routes.

## Tech stack

- Next.js App Router, React, TypeScript (strict)
- Plain CSS with custom properties (`app/globals.css`), light and dark theme
- `next/font` (Inter, Space Grotesk) and `next/image`
- Prettier for formatting

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run typecheck  # TypeScript check
npm run format     # Prettier
```

## Project structure

```
app/            Routes, root layout, global CSS, 404 page, favicon
  about/  portfolio/  contact/
components/     UI components (Navbar, Footer, ProjectGrid, Faq, ContactForm, ...)
data/           Site content: site.ts, projects.ts, skills.ts, tech.ts, faq.ts
lib/            Small helpers
public/img/     Logo and optimised WebP images
```

## Editing content

- Projects: `data/projects.ts` (order in the file is the order on the site)
- Skills: `data/skills.ts`
- FAQ: `data/faq.ts`
- Name, email, social links, form endpoint: `data/site.ts`
- Page copy: `app/**/page.tsx`

## Deployment

The simplest option is [Vercel](https://vercel.com): import the repository and deploy, no
configuration needed. Optionally set `NEXT_PUBLIC_SITE_URL` to the final domain so link previews
use the correct URL.

## Contact

- Email: muhammad.alfiansyah2805@gmail.com
- LinkedIn: [muhalfisyah](https://linkedin.com/in/muhalfisyah)
- GitHub: [@strvntrl](https://github.com/strvntrl)
- Instagram: [@alfianzyh](https://instagram.com/alfianzyh)
