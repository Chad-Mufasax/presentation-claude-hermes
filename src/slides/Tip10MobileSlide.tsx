import { motion } from 'framer-motion'

export function Tip10MobileSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 10</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Claude <span className="gradient-text">dans ta poche</span>.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        L'app iOS lance Claude Code à distance.
        <br /><span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>/teleport</span> et il bosse sur <strong style={{ color: 'var(--accent)' }}>ta machine</strong> depuis ton phone.
      </motion.p>

      <div style={{ display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: -3 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 220,
            height: 440,
            background: 'var(--surface)',
            borderRadius: 36,
            border: '8px solid var(--text)',
            padding: 14,
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
          }}
        >
          <div style={{
            width: 80,
            height: 22,
            background: 'var(--text)',
            borderRadius: 12,
            margin: '0 auto 12px',
          }} />
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mono"
            style={{
              fontSize: 11,
              padding: 12,
              background: 'var(--surface-2)',
              borderRadius: 12,
              lineHeight: 1.5,
              minHeight: 200,
            }}
          >
            <div style={{ color: 'var(--accent)' }}>{'>'} /teleport</div>
            <div style={{ color: 'var(--text-mute)', marginTop: 4 }}>connecting to mac…</div>
            <div style={{ color: 'var(--green)', marginTop: 4 }}>✓ session ready</div>
            <div style={{ color: 'var(--text)', marginTop: 12 }}>{'>'} fix le bug du staging</div>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ display: 'inline-block', marginLeft: 4 }}
            >
              ▌
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          style={{ maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 16 }}
        >
          {[
            { icon: '🚇', t: 'Dans le métro', d: 'Tu lances un fix. Il tourne pendant ton trajet.' },
            { icon: '☕', t: 'En réunion', d: 'Une idée passe ? Tu la dis au tel, Claude code.' },
            { icon: '🌙', t: 'La nuit', d: 'Pas besoin d\'ouvrir le laptop pour un hotfix urgent.' },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              className="glass"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + 0.15 * i }}
              style={{ padding: 16, display: 'flex', gap: 12, alignItems: 'center' }}
            >
              <div style={{ fontSize: 28 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700 }}>{item.t}</div>
                <div className="muted" style={{ fontSize: 13 }}>{item.d}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
