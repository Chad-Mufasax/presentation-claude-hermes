import { motion } from 'framer-motion'

const POINTS = [
  { num: 1, t: 'The model ≠ the tool', d: 'Claude is the bulb. The harness — CLAUDE.md, hooks, MCP, subagents — is everything else.' },
  { num: 2, t: 'Capitalize in CLAUDE.md', d: 'Every incident → rule. Every repeated pattern → skill. Your teaching debt becomes permanent.' },
  { num: 3, t: 'Subagents for the noise', d: 'Search, review, exploration → delegated. The parent stays compact, focused, clean.' },
  { num: 4, t: 'Plan before code', d: 'Plan mode + TaskCreate. 5 min of design = 1h not wasted debugging assumptions.' },
  { num: 5, t: 'Hermes for 24/7', d: 'When the terminal isn\'t enough. Cron + Telegram + multi-agent + persistent memory.' },
  { num: 6, t: 'Keep the human in the loop', d: 'No destructive action without approval. No auto-merge. No auto-deploy to prod.' },
]

export function TakeawaysSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 32 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> 26 · Takeaways</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          6 ideas to <span className="gradient-text">walk away with</span>.
        </h2>
      </motion.div>

      <div className="grid grid-3" style={{ gap: 18 }}>
        {POINTS.map((p, i) => (
          <motion.div
            key={p.num}
            className="glass card-int"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 24 }}
          >
            <motion.div
              style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1,
                background: 'var(--grad-warm)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: 12,
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            >
              0{p.num}
            </motion.div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.t}</div>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.55, margin: 0 }}>{p.d}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="glass"
        style={{
          background: 'linear-gradient(135deg, rgba(234,88,12,0.1), rgba(99,102,241,0.06))',
          padding: 28,
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
          The question isn't <em>"can AI do it?"</em> anymore.<br />
          It's <span className="gradient-text">"how fast can I wire it into my context?"</span>
        </p>
      </motion.div>
    </div>
  )
}
