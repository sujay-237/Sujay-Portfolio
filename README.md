# Sujay Lokhande

A cinematic personal site for **Sujay Lokhande**, an AI and cybersecurity student building practical projects with Python, C++, secure systems thinking, and fast hackathon execution.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion** and ready for deployment on **Vercel**.

## Stack

- React 18 / TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Kanit from Google Fonts

## Sections

1. **Hero** - full-screen video intro, name, focus areas, and sound control
2. **About** - student bio, technical focus, credentials, and tools
3. **Expertise** - AI security systems, Python/C++ development, ethical hacking, leadership, and interfaces
4. **Projects** - NeuroNet and WiseUp project cards with screenshots and links
5. **Contact** - email, LinkedIn, GitHub, and location footer

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

The dev server usually runs at `http://localhost:5173`.

## Project structure

```text
src/
|-- App.tsx
|-- main.tsx
|-- index.css
`-- components/
    |-- HeroSection.tsx
    |-- AboutSection.tsx
    |-- ServicesSection.tsx
    |-- ProjectsSection.tsx
    |-- ContactSection.tsx
    |-- ContactButton.tsx
    |-- LiveProjectButton.tsx
    |-- FadeIn.tsx
    `-- AnimatedText.tsx
```

## Featured Projects

| Project | Link | Focus |
| --- | --- | --- |
| NeuroNet | [neuronet-phi.vercel.app](https://neuronet-phi.vercel.app/) | AI cybersecurity toolkit, sandbox execution, threat intelligence |
| WiseUp | [github.com/sujay-237/Wiseup](https://github.com/sujay-237/Wiseup) | AI finance guidance, OCR, budgeting, Hindi/English support |

## Customization

| Want to change | Open this file |
| --- | --- |
| Name, hero copy, nav links | `src/components/HeroSection.tsx` |
| Bio and skills | `src/components/AboutSection.tsx` |
| Expertise list | `src/components/ServicesSection.tsx` |
| Projects and screenshots | `src/components/ProjectsSection.tsx` |
| Contact links | `src/components/ContactSection.tsx` |
| Page title and meta description | `index.html` |
| Theme colors and global styles | `src/index.css` |

## Deployment

Push the repository to GitHub, import it into Vercel, and deploy. No environment variables are required.
