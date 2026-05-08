import { motion } from 'framer-motion'

const STEPS = [
  { n: 1, t: 'You describe', d: 'What you want. No technical details.' },
  { n: 2, t: 'Claude proposes', d: 'His plan. Step by step.' },
  { n: 3, t: 'You approve', d: 'Or you correct. Before he codes.' },
  { n: 4, t: 'He executes', d: 'Right result first try. Not 5 round-trips.' },
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
          Always <span className="gradient-text">a plan</span> first.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Before Claude executes, ask him what he's <em>going</em> to do.
        You approve, you correct, then he codes.
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
        💡 Tip: press <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>shift+tab</span> to enable <strong>Plan Mode</strong>
      </motion.div>
    </div>
  )
}
