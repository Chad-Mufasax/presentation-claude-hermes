import { motion } from 'framer-motion'

const TASKS = [
  { task: 'Refactor auth API', status: 'extract middleware', color: 'clay' },
  { task: 'Jest tests', status: 'cover edge cases', color: 'purple' },
  { task: 'TS strict bug', status: 'fix null checks', color: 'green' },
  { task: 'Prisma migration', status: 'schema diff', color: 'warn' },
]

export function Tip01ParallelSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 01</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Run <span className="gradient-text">3 to 5 Claudes</span> in parallel.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        While one writes your article, another preps your slides, a third debugs your site. You jump between them.
        <br /><br />
        <strong style={{ color: 'var(--accent)' }}>According to Boris, this is <em>the</em> thing that changes everything.</strong>
      </motion.p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        {TASKS.map((t, i) => (
          <motion.div
            key={t.task}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6 + 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass card-int"
            style={{
              padding: 20,
              minWidth: 200,
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(234, 88, 12, 0)',
                  '0 0 0 12px rgba(234, 88, 12, 0.1)',
                  '0 0 0 0 rgba(234, 88, 12, 0)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: 'var(--green)',
              }}
            />
            <div style={{ fontSize: 32, marginBottom: 8 }}>🤖</div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{t.task}</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{t.status}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ textAlign: 'center', fontSize: 16, color: 'var(--text-dim)' }}
      >
        💡 Tip: <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>cmd+T</span> opens a new terminal · one Claude session per tab
      </motion.div>
    </div>
  )
}
