import { motion } from 'framer-motion'

export function Tip03ClaudeMdSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 03</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          <span className="gradient-text">CLAUDE.md</span> = his memory.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        A file at the root of your project. You write what he needs to know.
        <br />
        Claude reads it <strong style={{ color: 'var(--accent)' }}>every session</strong>.
      </motion.p>

      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>
        <motion.div
          className="glass"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ padding: 28, flex: 1, maxWidth: 380 }}
        >
          <div style={{ fontSize: 14, color: 'var(--text-mute)', marginBottom: 12, letterSpacing: '.1em', textTransform: 'uppercase' }}>What you put in it</div>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9, fontSize: 16 }}>
            <li>Project tech stack</li>
            <li>Code conventions</li>
            <li>Useful commands (test, build, deploy)</li>
            <li>Known pitfalls / gotchas</li>
            <li>Preferred style (comments, naming)</li>
          </ul>
        </motion.div>

        <motion.div
          className="glass"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            padding: 28,
            flex: 1,
            maxWidth: 380,
            background: 'linear-gradient(135deg, rgba(234,88,12,0.08), rgba(99,102,241,0.04))',
          }}
        >
          <div style={{ fontSize: 14, color: 'var(--accent)', marginBottom: 12, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>🪄 The ultimate hack</div>
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
            When Claude messes up:<br />
            <em>"Update your CLAUDE.md so you never make this mistake again."</em>
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              marginTop: 16,
              padding: 12,
              background: 'var(--surface)',
              borderRadius: 8,
              fontSize: 14,
              color: 'var(--text-dim)',
              fontStyle: 'italic',
            }}
          >
            → he self-corrects forever.
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ textAlign: 'center', fontSize: 16, color: 'var(--text-dim)' }}
      >
        💡 Tip: <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>/init</span> auto-generates an initial CLAUDE.md
      </motion.div>
    </div>
  )
}
