import { motion } from 'framer-motion'

const COMMANDS = [
  { cmd: '/review-pr', d: 'Systematic review against your checklist', icon: '🔍' },
  { cmd: '/test-cover', d: 'Generates missing Jest tests on a file', icon: '🧪' },
  { cmd: '/refactor', d: 'Extracts pure function + adds strict types', icon: '🛠' },
  { cmd: '/debug-log', d: 'Traces a bug from a pasted stack trace', icon: '🐛' },
]

export function Tip06CommandsSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 06</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Doing it 2× / day? <span className="gradient-text">→ command.</span>
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Describe the task once. After that, it's <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>/my-command</span>.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 800, margin: '0 auto', width: '100%' }}>
        {COMMANDS.map((c, i) => (
          <motion.div
            key={c.cmd}
            className="glass card-int"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              style={{ fontSize: 36 }}
            >
              {c.icon}
            </motion.div>
            <div>
              <div className="mono" style={{ fontSize: 17, fontWeight: 700, color: 'var(--accent)' }}>{c.cmd}</div>
              <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>{c.d}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="glass"
        style={{
          padding: 18,
          maxWidth: 700,
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.07), rgba(234,88,12,0.04))',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 15, margin: 0, lineHeight: 1.7 }}>
          A command <strong>starts from a skill</strong> — it's the explicit invocation of one.
          <br />
          <span className="muted" style={{ fontSize: 13 }}>
            Skill = the logic described. Command = the shortcut to trigger it manually via{' '}
            <span className="mono" style={{ background: 'var(--surface-2)', padding: '1px 6px', borderRadius: 4 }}>/my-command</span>.
          </span>
        </p>
      </motion.div>
    </div>
  )
}
