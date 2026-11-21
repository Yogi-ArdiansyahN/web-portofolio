# Web Portfolio

Personal portfolio of Yogi Ardiansyah Nugraha in Indonesian and English, with a language toggle in the navbar. Built with Astro 5, React 19, and Tailwind CSS 4.

## Structure

- `src/pages/index.astro`, `src/pages/project.astro` - static routes that render the React island with page-specific metadata.
- `src/lib/portfolio.js` - loads and parses `portfolio/*.md` for both routes.
- `portfolio/*.md` - project content source.
- `src/layouts/Layout.astro` - HTML shell, metadata, and footer.
- `src/i18n.js` - UI copy and localized text helper.
- `src/components/App.jsx` - navigation links, language/theme toggle, and metadata updates.
- `src/components/Home.jsx` - profile, journey, and tech stack.
- `src/components/Project.jsx` - project list.
- `src/styles/global.css` - color tokens, fluid typography, focus states, and print layout.

## Commands

| Command | Purpose |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Run the development server on `localhost:4321` |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the build locally |
| `npm run check` | Check Astro and TypeScript |
