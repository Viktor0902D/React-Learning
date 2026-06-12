# Copilot instructions for this repository

Purpose
- Provide repository-specific commands and architecture notes so Copilot sessions and automation can act in the correct working directory and use the right scripts.

Repository layout (high level)
- This is a multi-app workspace containing two independent Vite + React apps:
  - kanban-board/  — standalone Vite+React app (src/main.jsx, src/App.jsx)
  - smart-thermostat/ — standalone Vite+React app (src/main.jsx, src/App.jsx)
- Each app is a separate package (each has its own package.json, vite.config.js, eslint.config.js). There is no monorepo package manager or shared root package.json: run npm commands inside the subfolder of the app you are working on.

Build, run and lint commands (per app)
- Common prerequisite: cd into the app directory (kanban-board or smart-thermostat) and run npm install once.

kanban-board/
- Install deps: npm install
- Start dev server (HMR): npm run dev
- Build for production: npm run build  (output -> dist/)
- Preview built app locally: npm run preview
- Lint all JS/JSX files: npm run lint  (runs: eslint .)
- Lint a single file: npx eslint kanban-board/src/App.jsx

smart-thermostat/
- Install deps: npm install
- Start dev server: npm run dev
- Build: npm run build
- Preview: npm run preview
- Lint: npm run lint
- Lint a single file: npx eslint smart-thermostat/src/App.jsx

Notes about tests
- No test script is present in either package.json. There are currently no test frameworks or test files to run.

High-level architecture
- Each app is a minimal Vite + React template:
  - Entrypoint: src/main.jsx (creates root and renders <App /> inside StrictMode)
  - Primary UI: src/App.jsx (local state via useState, small functional components defined in the same file in these templates)
  - Static assets: src/assets/
  - Styling: src/index.css and src/App.css inside each app
- State management is local (useState). No routing, global store, or backend integration included in these projects as checked in the repo.

Key, repo-specific conventions
- File extensions: .jsx is used for components (not .tsx or TypeScript)
- ESLint: eslint.config.js (flat config) is present in each app and extends @eslint/js + react-hooks + react-refresh configs. The project expects ESLint v10+ and plugins in devDependencies.
- ID generation: sample components use Date.now() to create simple IDs — these are ephemeral and intended for demo/learning purposes.
- package.json: each project is marked "private": true to avoid accidental npm publish.
- Work within subproject directories for install/build/lint tasks to avoid mismatching node_modules or scripts.

Files scanned/integrated
- README.md from each app (kept short, template text) and per-app package.json, vite.config.js and eslint.config.js were used to produce these instructions.
- No additional AI assistant config files (CLAUDE.md, AGENTS.md, .cursorrules, etc.) were found.

When starting Copilot sessions or automation
- Set working directory to the target app (kanban-board or smart-thermostat) before running npm scripts.
- Prefer npm install in the app folder first; lint runs assume devDependencies are installed locally.
- If making cross-cutting changes (shared patterns across both apps), update both app folders; there is no central shared config.

If you want these instructions adjusted
- Request any additions (tests, CI, Playwright/Playwright tests, or more architecture details) and the file will be updated.

(Generated automatically from repository contents.)
