# HSE Incident Copilot – Frontend

Web interface for writing HSE (Health, Safety, Environment) incident reports faster. Built with Vite + React. It connects to a FastAPI backend (default `http://localhost:8000`) that generates the report draft, and keeps drafts in memory for the browser session.

## Features
- Incident intake form with validation and a progress animation while the report generates
- Editable draft view (tabs) with copy, regenerate and export actions
- Export to Word: the current draft is sent to `/api/export-docx` and downloaded as `incident-report-<title>-<timestamp>.docx`
- Voice dictation (optional, see below)
- Dark/light theme, saved in `localStorage`
- Mock draft fallback when the backend is unreachable, so the flow can still be demoed

## Tech stack
- React + Vite
- Tailwind-style utilities (pre-built in `src/styles/tailwind.css`, so the app also works offline; a standard Tailwind config is included to regenerate styles)
- Axios for API calls
- FastAPI backend (separate service)

## Quick start
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev` (http://localhost:5173)
3. Build for production: `npm run build`, then `npm run preview`

Set the backend URL with `VITE_BACKEND_URL`:

```bash
VITE_BACKEND_URL=http://localhost:8000 npm run dev
```

The Axios wrapper is in `src/lib/api.js` if you need to change headers or timeouts.

## Voice dictation
- Enabled by default. Disable it with `VITE_ENABLE_VOICE_DICTATION=false` (or the `ENABLE_VOICE_DICTATION` flag).
- Live recognition uses the browser Web Speech API (`window.SpeechRecognition`).
- Browsers without support fall back to recording audio in the browser and sending it to `/api/transcribe-audio`.
- Users must allow microphone access. Support varies on mobile Safari/Chrome, and HTTPS is recommended in production.

## Key files
- `src/main.jsx`: wraps the app with routing, theme provider and draft store
- `src/App.jsx`: routes and global slide-over controller
- `src/pages/NewIncident.jsx`: incident intake form, validation, progress animation, draft creation
- `src/pages/DraftPage.jsx`: standalone draft view with export, regenerate and copy
- `src/pages/DraftsList.jsx`: list of drafts cached in the current session
- `src/components/SlideOverDraft.jsx`: focus-trapped slide-over with editable tabs and actions
- `src/components/Header.jsx`: logo, navigation and theme toggle
- `src/context/DraftStore.jsx`: in-memory draft registry keyed by UUID
- `src/styles/tailwind.css`: bundled Tailwind-style utilities (dark-mode aware)

## Demo tips
- Dev-only raw JSON toggles show the exact `/api/generate-report` payloads.
- `.txt` uploads are appended to the Raw Notes field in the browser.

## Known limitations
- `.docx` upload parsing is not implemented yet (TODO).
- Drafts are lost when the browser session ends (no database in the frontend).
