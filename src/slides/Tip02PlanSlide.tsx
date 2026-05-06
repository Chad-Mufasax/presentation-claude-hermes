import { motion } from 'framer-motion'

const STEPS = [
  { n: 1, t: 'Tu décris', d: 'Ce que tu veux. Sans détail technique.' },
  { n: 2, t: 'Claude propose', d: 'Son plan. Étape par étape.' },
  { n: 3, t: 'Tu valides', d: 'Ou tu corriges. Avant qu\'il code.' },
  { n: 4, t: 'Il exécute', d: 'Bon résultat en 1 fois. Pas 5 allers-retours.' },
]

export function Tip02PlanSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 02</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Toujours <span className="gradient-text">un plan</span> avant.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Avant que Claude exécute, demande-lui ce qu'il <em>va</em> faire.
        Tu valides, tu corriges, ensuite il code.
      </motion.p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            className="glass card-int"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + 0.15 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 24, minWidth: 200, flex: 1, maxWidth: 240, position: 'relative' }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              style={{
                fontSize: 56,
                fontWeight: 700,
                background: 'var(--grad-warm)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              0{s.n}
            </motion.div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{s.t}</div>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, margin: 0 }}>{s.d}</p>
            {i < STEPS.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + 0.15 * i }}
                style={{
                  position: 'absolute',
                  right: -16,
                  top: '50%',
                  fontSize: 24,
                  color: 'var(--accent)',
                  transform: 'translateY(-50%)',
                }}
              >
                →
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ textAlign: 'center', fontSize: 16, color: 'var(--text-dim)' }}
      >
        💡 Astuce: appuie sur <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>shift+tab</span> pour activer <strong>Plan Mode</strong>
      </motion.div>
    </div>
  )
}
