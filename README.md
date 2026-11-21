# Web Portfolio

Personal portfolio of Yogi Ardiansyah Nugraha in Indonesian and English, with a language toggle in the navbar. Built with Astro 5, React 19, and Tailwind CSS 4.

## Structure

- `src/pages/index.astro` - loads and parses `portfolio/*.md`, renders `App` as a React island.
- `portfolio/*.md` - project content source.
- `src/layouts/Layout.astro` - HTML shell, localized metadata, and footer.
- `src/i18n.js` - UI copy and localized text helper.
- `src/components/App.jsx` - navigation, language/theme toggle, URL state, and metadata updates.
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
