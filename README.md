# Shivani Samadhiya — Portfolio

A dark, developer-themed personal portfolio built with React, TypeScript,
Tailwind CSS, and Framer Motion. All content is sourced from
`src/data/resumeData.ts` — a single file that mirrors the resume, so nothing
in the UI is invented.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Before you deploy — replace these placeholders

Search the codebase for `PLACEHOLDER` to find every spot that needs a real
value (all of them live in `src/data/resumeData.ts`):

- `personal.linkedin` — your LinkedIn profile URL
- `personal.github` — your GitHub profile URL
- Each project's `links` array — live demo, admin panel, backend API, and
  GitHub repo URLs, for Prescripto, NorthPeak Digital, and the KBC quiz game

Until you fill these in, the corresponding buttons in the Projects section
render as disabled (greyed out, non-clickable) rather than broken links.

The resume PDF is already included at `public/Shivani_Samadhiya_Resume.pdf`
and wired up to both "Download Resume" buttons — replace that file directly
if you update your resume.

## Project structure

```
src/
├── data/
│   └── resumeData.ts       # single source of truth for all content
├── hooks/
│   ├── useActiveSection.ts # drives navbar active-link highlighting
│   └── useReducedMotion.ts # respects OS-level reduced-motion setting
├── components/
│   ├── Doodles.tsx         # reusable hand-drawn-style SVG accents
│   ├── Loader.tsx          # initial loading animation
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Strengths.tsx
│   ├── Contact.tsx         # mailto-based contact form (no backend needed)
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Notes

- The contact form has no backend — submitting it opens the visitor's email
  client with the message pre-filled, addressed to the email in
  `resumeData.ts`. If you want a proper backend later, swap the `handleSubmit`
  logic in `Contact.tsx` for a call to a form service (e.g. Formspree,
  EmailJS) or your own API.
- All animation respects `prefers-reduced-motion` — the loading screen is
  skipped instantly, and floating doodles render static, for visitors with
  that OS setting enabled.
- Colors, fonts, and spacing tokens live in `tailwind.config.js` if you want
  to adjust the palette.
