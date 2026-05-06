import { motion } from 'framer-motion'

const PRIORITIES = [
  {
    n: '01',
    t: 'Plusieurs Claude en parallèle',
    d: 'Ouvre 3 onglets terminal. 3 sessions. Une par tâche.',
    color: 'var(--accent)',
  },
  {
    n: '02',
    t: 'Un CLAUDE.md par projet',
    d: 'Stack, conventions, gotchas. Mis à jour à chaque erreur.',
    color: 'var(--indigo)',
  },
  {
    n: '03',
    t: 'Plan mode systématique',
    d: 'shift+tab. Tu valides avant que ça code.',
    color: 'var(--purple)',
  },
  {
    n: '04',
    t: 'Tâches répétitives → commandes',
    d: '/email-relance, /standup, /review-pr. Markdown, 5 min.',
    color: 'var(--green)',
  },
]

export function ApplyThisWeekSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Cette semaine</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Si tu retiens <span className="gradient-text">4 trucs</span>, c'est ça.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22, maxWidth: '60ch' }}
      >
        Le reste, c'est du bonus. Ces 4 changent ton quotidien <strong style={{ color: 'var(--accent)' }}>dès cette semaine</strong>.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, maxWidth: 1000, margin: '0 auto', width: '100%' }}>
        {PRIORITIES.map((p, i) => (
          <motion.div
            key={p.n}
            className="glass card-int"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + 0.12 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 24,
              borderLeft: `4px solid ${p.color}`,
              display: 'flex',
              gap: 18,
              alignItems: 'flex-start',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: p.color,
                lineHeight: 1,
                opacity: 0.9,
              }}
            >
              {p.n}
            </motion.div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{p.t}</div>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.5, margin: 0 }}>{p.d}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="glass"
        style={{
          padding: 22,
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(234,88,12,0.1), rgba(99,102,241,0.05))',
        }}
      >
        <p style={{ fontSize: 17, margin: 0, lineHeight: 1.5 }}>
          <strong>Le reste</strong> (voix, mobile, MCP, phrases magiques) — tu y reviendras quand tu seras à l'aise sur ces 4-là.
        </p>
      </motion.div>
    </div>
  )
}
