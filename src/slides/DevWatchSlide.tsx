import { motion } from 'framer-motion'

const TEAMS = [
  {
    icon: '🛡',
    name: 'Security',
    sources: 'npm audit · Snyk · GitHub Advisories · supply chain',
    example: 'CVE-2026-31xxx — typeorm < 0.3.20 — affects MufasaX-BackEnd',
    color: 'clay',
  },
  {
    icon: '📊',
    name: 'Performance',
    sources: 'Lighthouse CI per PR · bundle-stats · web-vitals',
    example: 'Dashboard /admin/users +18% bundle (framer-motion unused)',
    color: 'purple',
  },
  {
    icon: '📦',
    name: 'Deps health',
    sources: 'weekly audit per repo · diff with main · breaking changes',
    example: '9 packages outdated · 2 majors · BackEnd ↔ Mobile drift',
    color: 'cyan',
  },
  {
    icon: '🧹',
    name: 'Code health',
    sources: 'tsc errors trend · dead-code scan · low-coverage files',
    example: 'BackEnd: 14 TS warnings · 6 unused exports · 3 files <40% cov',
    color: 'green',
  },
]

export function DevWatchSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 32 }}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="eyebrow"><span className="dot" /> 21 · Dev use cases · Watch</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          One <span className="gradient-text">Trello board per concern</span>. Hermes feeds it.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      >
        No new tool to adopt. Hermes watches 24/7 (npm registry, GitHub, Lighthouse, codebase),
        Opus filters what's worth your time, and a <strong style={{ color: 'var(--accent)' }}>Trello card</strong> shows up
        on the right team's board. You scan your board over coffee — that's it.
      </motion.p>

      <div className="grid grid-2" style={{ gap: 16 }}>
        {TEAMS.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.08 * i, duration: 0.5 }}
            style={{ padding: 20 }}
          >
            <div className="row" style={{ alignItems: 'center', gap: 14, marginBottom: 10 }}>
              <div style={{ fontSize: 32 }}>{t.icon}</div>
              <div className="mono" style={{ fontWeight: 700, fontSize: 18 }}>{t.name}</div>
              <span className={`tag ${t.color}`} style={{ fontSize: 11, marginLeft: 'auto' }}>1 board</span>
            </div>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>
              <strong style={{ color: 'var(--text)' }}>Sources:</strong> {t.sources}
            </p>
            <div style={{
              borderLeft: '2px solid rgba(255,255,255,0.2)',
              paddingLeft: 10,
              fontSize: 12,
              fontStyle: 'italic',
              color: 'var(--text-mute)',
              lineHeight: 1.5,
            }}>
              💡 Sample card: <span style={{ color: 'var(--text)' }}>{t.example}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="row"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        style={{ justifyContent: 'center', gap: 18, marginTop: 8 }}
      >
        <span className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>cron</span>
        <span style={{ color: 'var(--text-mute)' }}>→</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>fetch</span>
        <span style={{ color: 'var(--text-mute)' }}>→</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--accent)' }}>Opus filters</span>
        <span style={{ color: 'var(--text-mute)' }}>→</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>Trello API</span>
      </motion.div>
    </div>
  )
}
