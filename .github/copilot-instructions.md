# Copilot instructions for this repository

Purpose
- Provide repository-aware guidance and commands so Copilot sessions and automation use the correct working directory and scripts.

Repository layout (high level)
- This repository is a multi-app learning workspace. All example apps live under the Phase1 folder. Each app is a standalone Vite + React project (its own package.json, vite.config.js, eslint.config.js).
  - Phase1\kanban-board — Vite + React app (src/main.jsx, src/App.jsx)
  - Phase1\smart-thermostat — Vite + React app (src/main.jsx, src/App.jsx)
  - Phase1\password-strength-meter — Vite + React app (src/main.jsx, src/App.jsx)
  - Phase1\unified-profile-form — Vite + React app (src/main.jsx, src/App.jsx)
- There is no single root package.json or monorepo package manager. Run npm commands inside the app folder you are working on.

Build, run and lint commands (per app)
- Common prerequisite: cd into the app directory (for example: cd Phase1\kanban-board) and run npm install once.

Per-app commands (run inside the app folder):
- Install deps: npm install
- Start dev server (HMR): npm run dev
- Build for production: npm run build  (output -> dist/)
- Preview built app locally: npm run preview
- Lint all JS/JSX files: npm run lint  (runs: eslint .)
- Lint a single file: npx eslint src\App.jsx

Notes about tests
- No test scripts are present in package.json for these apps. There are currently no test frameworks or test files in the repository.

High-level architecture
- Each app is a minimal Vite + React template:
  - Entrypoint: src/main.jsx (creates React root and renders <App /> inside StrictMode)
  - Primary UI: src/App.jsx (local state via useState; small functional components are used)
  - Static assets: src/assets/
  - Styling: src/index.css and src/App.css inside each app
- State management is local (useState). No routing, global store, or backend integration are included in the checked-in projects.

Key, repo-specific conventions
- File extensions: .jsx is used for React components (no TypeScript .tsx in these samples)
- ESLint: eslint.config.js (flat config) is present in each app and extends @eslint/js plus react-hooks and react-refresh configs. The projects expect ESLint v10+ and related plugins defined in devDependencies.
- ID generation: sample components use Date.now() for simple IDs — these are for demo/learning purposes only.
- package.json: each app is marked "private": true to avoid accidental npm publish.
- Always run tooling (npm install, lint, build) from inside the specific app folder to avoid mismatched node_modules or scripts.

Files scanned / integrated
- The instructions were generated from the files inside Phase1 (per-app README.md, package.json, vite.config.js, eslint.config.js and src/ files).
- No additional AI assistant configuration files (CLAUDE.md, AGENTS.md, .cursorrules, etc.) were found.

When starting Copilot sessions or automation
- Set the working directory to the target app folder before running npm scripts. Examples:
  - cd Phase1\kanban-board
  - cd Phase1\unified-profile-form
- Prefer running npm install inside the app folder first; lint commands assume devDependencies are installed locally.
- If making cross-cutting changes that should apply to multiple examples, update every affected app under Phase1 — there is no shared root config.

If you want these instructions adjusted
- Request additions (tests, CI, Playwright, or additional architecture notes) and the file will be updated.

(Generated automatically from repository contents.)
