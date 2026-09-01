# 🚀 Shivani Samadhiya — Portfolio

A 🌙 dark, developer-themed personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

✨ All content is sourced from a single file — `src/data/resumeData.ts` — which mirrors the resume, so nothing in the UI is invented.

---

## 👩‍💻 About Me

Hi, I'm **Shivani Samadhiya** 👋 — a **Full Stack Developer (MERN)** and final-year **B.Tech CSE** student at Agra College (2022–2026).

- 🛠️ Core stack: **React.js, Node.js, Express.js, MongoDB, TypeScript, JavaScript**
- 🏥 Built **Prescripto** — an AI-integrated healthcare consultation & appointment booking platform with real-time video and payments
- 🌐 Built **NorthPeak Digital** — a fully responsive digital agency website
- 🎮 Built a **KBC-style quiz game** in Python
- ☁️ Currently leveling up in **AWS**
- 📍 Based in Agra, India

📫 **Let's connect:**
[LinkedIn](https://www.linkedin.com/in/shivani-samadhiya-3ab768287) • [GitHub](https://github.com/shivanisamadhiya) • [Portfolio](https://shivani-portfolio-three-sable.vercel.app)

---

## 🏁 Getting Started

> Requires **Node.js 18+**

```bash
npm install
npm run dev
```

🌐 Open the local URL Vite prints (usually `http://localhost:5173`)

### 📦 Build for production

```bash
npm run build
npm run preview   # 👀 preview the production build locally
```

---

## 🔗 Live Links

All profile and project links are filled in and live in `src/data/resumeData.ts`:

- 🔗 **LinkedIn**, 🐙 **GitHub**, and 🌐 **Portfolio** — added under `personal`
- 📁 **Project links** (live demo, admin panel, backend API, GitHub repo) — added for **Prescripto**, **NorthPeak Digital**, and the **KBC Quiz Game**

✅ All buttons in the Projects section are now active and clickable.

📄 The resume PDF is included at `public/Shivani_Samadhiya_Resume.pdf` and wired up to both **"Download Resume"** buttons — replace that file directly whenever the resume is updated.

---

## 🗂️ Project Structure

```

src/
├── 📊 data/
│   └── resumeData.ts       # single source of truth for all content
├── 🪝 hooks/
│   ├── useActiveSection.ts # drives navbar active-link highlighting
│   └── useReducedMotion.ts # respects OS-level reduced-motion setting
├── 🧩 components/
│   ├── Doodles.tsx         # reusable hand-drawn-style SVG accents
│   ├── Loader.tsx          # initial loading animation
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx      # work experience / internships
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Strengths.tsx
│   ├── Contact.tsx         # mailto-based contact form (no backend needed)
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css

```

---

## 📝 Notes

- 📬 **Contact form:** Has no backend — submitting it opens the visitor's email client with the message pre-filled, addressed to the email in `resumeData.ts`. Want a real backend later? Swap the `handleSubmit` logic in `Contact.tsx` for a call to a form service (e.g. [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com)) or your own API.
- ♿ **Accessibility:** All animation respects `prefers-reduced-motion` — the loading screen is skipped instantly, and floating doodles render static, for visitors with that OS setting enabled.
- 🎨 **Styling:** Colors, fonts, and spacing tokens live in `tailwind.config.js` if you want to adjust the palette.

---

<div align="center">

Made with 💻 + ☕ by **Shivani Samadhiya**

</div>


