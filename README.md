# Avishkar More — Personal Portfolio

A personal portfolio website for **Avishkar More**, a Cybersecurity Engineering student and full-stack developer. Built with React, TypeScript, Vite, and Tailwind CSS — featuring smooth animations, an interactive background, and a fully responsive layout.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://avishkar-portfolio.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, title, availability badge, terminal animation & particle field |
| **About** | Brief introduction and background |
| **Education** | Academic timeline |
| **Experience** | Work / internship experience |
| **Projects** | Featured and additional project cards with tech tags |
| **Tech Stack** | Interactive visualization of tools & technologies |
| **Skills** | Animated skill bars grouped by category |
| **Certifications** | Certifications & courses |
| **Achievements** | Hackathons, awards, and notable milestones |
| **GitHub Activity** | GitHub contribution calendar |
| **Contact** | Contact form and social links |

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v6
- **Testing:** Vitest + Playwright
- **Deployment:** Vercel

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm (or Bun)

```sh
# Clone the repository
git clone https://github.com/Avi007-debug/Portfolio-Avishkar.git
cd Portfolio-Avishkar

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (Vitest) |

---

## Project Structure

```
src/
├── components/        # All UI sections and reusable components
│   └── ui/            # shadcn/ui primitives
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Route-level page components
└── main.tsx           # Application entry point
```

---

## Deployment

The portfolio is deployed on **Vercel**. Any push to the main branch triggers an automatic deployment.

To deploy your own fork:
1. Import the repository in [Vercel](https://vercel.com)
2. Set the framework preset to **Vite**
3. Deploy — no extra environment variables required

---

## License

MIT © [Avishkar More](https://github.com/Avi007-debug)
