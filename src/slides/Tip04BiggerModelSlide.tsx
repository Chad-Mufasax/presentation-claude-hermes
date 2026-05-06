import { motion } from 'framer-motion'

export function Tip04BiggerModelSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 04</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Prends le <span className="gradient-text">plus gros modèle</span>.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Pour les tâches complexes : <strong style={{ color: 'var(--accent)' }}>Opus + thinking activé</strong>.
        <br />Le coût en plus se rentabilise en 1 itération évitée.
      </motion.p>

      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'flex-end' }}>
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom', textAlign: 'center' }}
        >
          <div style={{
            width: 140,
            height: 80,
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            color: 'var(--text-dim)',
            marginBottom: 8,
          }}>
            Haiku
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-mute)' }}>rapide, low-cost</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom', textAlign: 'center' }}
        >
          <div style={{
            width: 140,
            height: 140,
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: 'var(--text)',
            fontWeight: 600,
            marginBottom: 8,
          }}>
            Sonnet
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-mute)' }}>équilibré</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom', textAlign: 'center', position: 'relative' }}
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(234,88,12,0.4)',
                '0 0 0 24px rgba(234,88,12,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 200,
              height: 220,
              background: 'var(--grad-warm)',
              borderRadius: 16,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              color: 'white',
              fontWeight: 800,
              marginBottom: 8,
            }}
          >
            Opus
            <div style={{ fontSize: 13, fontWeight: 500, opacity: 0.9, marginTop: 8 }}>+ thinking 🧠</div>
          </motion.div>
          <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 700 }}>← prends celui-là</div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="glass"
        style={{ padding: 20, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}
      >
        <p style={{ fontSize: 16, margin: 0, lineHeight: 1.6 }}>
          <strong>1 réponse Opus juste</strong> &gt; <strong>5 réponses Haiku approximatives</strong>.
          <br />
          <span className="muted" style={{ fontSize: 13 }}>Sur Max ($20/mo) tu y as droit dans la limite.</span>
        </p>
      </motion.div>
    </div>
  )
}
