import { motion } from 'framer-motion'

export function TransitionSlide() {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28, alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          inset: -40,
          opacity: .35,
          pointerEvents: 'none',
          filter: 'blur(80px)',
        }}
      >
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '20%', left: '15%',
            width: 360, height: 360, borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent), transparent 60%)',
          }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '10%', right: '10%',
            width: 420, height: 420, borderRadius: '50%',
            background: 'radial-gradient(circle, var(--indigo), transparent 60%)',
          }}
        />
      </motion.div>

      <motion.div
        className="eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="dot" /> Part 3 · Industrialize
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          margin: 0,
          fontSize: 'clamp(48px, 7vw, 96px)',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-.04em',
          maxWidth: '20ch',
        }}
      >
        What if Claude<br />
        <span className="gradient-text">never</span> stopped?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="lede"
        style={{ fontSize: 'clamp(18px, 1.7vw, 24px)', maxWidth: '60ch' }}
      >
        Not <em>session-bounded</em>. Not <em>terminal-only</em>. A real teammate who pings you on Telegram when a cron breaks,
        reviews your PRs overnight, and briefs you in the morning.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{
          fontSize: 56,
          fontWeight: 700,
          background: 'var(--grad-warm)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '-.03em',
          marginTop: 8,
        }}
      >
        → Hermes.
      </motion.div>
    </div>
  )
}
