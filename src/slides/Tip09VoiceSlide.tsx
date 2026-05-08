import { motion } from 'framer-motion'

export function Tip09VoiceSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 09</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          <span className="gradient-text">Talk</span>, stop typing.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        You think 3× faster out loud than on a keyboard.
        <br />On Mac, double-tap <span className="mono" style={{ background: 'var(--surface-2)', padding: '4px 12px', borderRadius: 8, fontSize: 18 }}>fn</span> → native dictation.
      </motion.p>

      <div style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          style={{ position: 'relative', width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.6, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.6,
              }}
              style={{
                position: 'absolute',
                width: 140,
                height: 140,
                borderRadius: '50%',
                border: '2px solid var(--accent)',
              }}
            />
          ))}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'var(--grad-warm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              boxShadow: '0 12px 40px rgba(234,88,12,0.4)',
            }}
          >
            🎙️
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="glass"
          style={{ padding: 24, maxWidth: 380 }}
        >
          <div style={{ fontSize: 14, color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 12 }}>
            Benefits
          </div>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.9, fontSize: 15 }}>
            <li>You describe more context, faster</li>
            <li>Thinking out loud structures your thought</li>
            <li>You use Claude while walking</li>
            <li>No more keyboard fatigue on long prompts</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        style={{ textAlign: 'center', fontSize: 16, color: 'var(--text-dim)' }}
      >
        💡 Mac setup: <em>System Preferences → Keyboard → Dictation → enable</em>
      </motion.div>
    </div>
  )
}
