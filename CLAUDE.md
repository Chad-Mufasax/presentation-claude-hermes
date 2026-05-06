# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server on port 5173 (auto-opens browser)
npm run build     # Production build → dist/
npm run preview   # Preview production build on port 4173
```

No test or lint scripts are configured. TypeScript strict mode serves as the type-check gate.

## Architecture

This is a **React 18 + TypeScript + Vite 6** interactive slide presentation ("Claude Code: From Novice to Orchestrator"). There is no router library — navigation is pure URL hash (`#1`, `#2`, …).

**Slide system:**
- `src/slides.tsx` — master index: imports every slide component and exports a `slides` array
- `src/App.tsx` — shell: reads hash for current slide index, handles keyboard navigation (arrows, PageUp/Down, Home/End), renders the active slide with Framer Motion transitions and a progress bar
- `src/slides/` — one TSX file per slide (42 components); each is a standalone presentational component receiving no props

**Design system (`src/styles.css`):**
- Color palette: warm orange `#ea580c` + indigo `#6366f1`
- Fonts: Space Grotesk (headings/body) and JetBrains Mono (code), loaded via Google Fonts in `index.html`
- Reusable CSS classes: `.glass-card`, `.tag`, `.pill`, `.code-block`, `.terminal-block`, gradient utilities, animation keyframes (`float`, `shimmer`, `fade-in-up`)
- All slide components consume these shared classes directly; there is no CSS-in-JS or CSS modules

**Adding a new slide:**
1. Create `src/slides/MySlide.tsx` as a default-export React component
2. Import and append it in `src/slides.tsx`
3. The slide is immediately reachable via its new hash index

**Key dependencies:** `framer-motion` (transitions), `recharts` (charts on cost/analysis slides).
