import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { slides } from './slides'

export default function App() {
  const [idx, setIdx] = useState(() => {
    const m = window.location.hash.match(/#(\d+)/)
    return m ? Math.max(0, Math.min(slides.length - 1, parseInt(m[1], 10) - 1)) : 0
  })
  const [dir, setDir] = useState(1)

  const total = slides.length
  const current = slides[idx]

  function go(delta: number) {
    setDir(delta > 0 ? 1 : -1)
    setIdx((i) => Math.max(0, Math.min(total - 1, i + delta)))
  }
  function jump(i: number) {
    setDir(i > idx ? 1 : -1)
    setIdx(i)
  }

  useEffect(() => {
    window.location.hash = String(idx + 1)
  }, [idx])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); go(1) }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1) }
      else if (e.key === 'Home') { setDir(-1); setIdx(0) }
      else if (e.key === 'End')  { setDir(1); setIdx(total - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  // Tap-to-advance: click on the stage advances. Left 25% = previous,
  // right 75% = next. Ignored on interactive elements so buttons,
  // links, and code blocks keep working as expected on desktop.
  function onStageClick(e: React.MouseEvent<HTMLElement>) {
    const t = e.target as HTMLElement
    if (t.closest('button, a, input, select, textarea, [contenteditable], code, pre, .hud')) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    if (x < rect.width * 0.25) go(-1)
    else go(1)
  }

  const pct = useMemo(() => Math.round(((idx + 1) / total) * 100), [idx, total])

  return (
    <>
      <div className="bg-ambient" />
      <div className="app">
        <main className="stage" onClick={onStageClick}>
          <AnimatePresence mode="wait" custom={dir}>
            <motion.section
              key={idx}
              className="slide"
              custom={dir}
              variants={{
                enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40, scale: 0.98 }),
                center: { opacity: 1, x: 0, scale: 1 },
                exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40, scale: 0.98 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {current.render({ go, jump, idx, total })}
              <div className="credit">chad@mufasax.com · 05/2026 · keyboard ← →</div>
            </motion.section>
          </AnimatePresence>
        </main>

        <nav className="hud">
          <span className="meta">{String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          <div className="progress" aria-hidden>
            <div style={{ width: `${pct}%` }} />
          </div>
          <span className="meta" style={{ minWidth: 220, textAlign: 'right' }}>{current.title}</span>
          <div className="nav">
            <button onClick={() => jump(0)} disabled={idx === 0} title="Start">⏮</button>
            <button onClick={() => go(-1)} disabled={idx === 0}>← Prev</button>
            <button onClick={() => go(1)} disabled={idx === total - 1}>Next →</button>
          </div>
        </nav>
      </div>
    </>
  )
}
