import { motion } from 'framer-motion'

const FEATURES = [
  { icon: '📱', title: 'Telegram-first', body: 'Ton bot parle 17 plateformes. Un seul process.' },
  { icon: '🧠', title: 'Mémoire persistante', body: 'Faits, prefs, contexte conservés entre sessions.' },
  { icon: '⏰', title: 'Cron natif', body: 'Schedule en français: "tous les matins à 7h, brief moi".' },
  { icon: '🤖', title: 'Multi-agents', body: 'Plusieurs profiles spécialisés, kanban coordination.' },
]

export function HermesIntroSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> 17 · Hermes</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Quand le terminal ne suffit plus.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Claude Code = excellent dans une session interactive. Mais quand tu veux que Claude bosse <strong style={{ color: 'var(--accent)' }}>pendant que tu dors</strong>,
        envoie sur Telegram, surveille des crons — il faut un orchestrateur. C'est <strong style={{ color: 'var(--accent)' }}>Hermes</strong>.
      </motion.p>

      <div className="grid grid-4" style={{ gap: 18 }}>
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            className="glass card-int"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5 + 0.1 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 24, textAlign: 'center' }}
          >
            <motion.div
              style={{ fontSize: 48, marginBottom: 12 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
            >
              {f.icon}
            </motion.div>
            <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.title}</div>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, margin: 0 }}>{f.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        style={{ display: 'flex', justifyContent: 'center', gap: 48 }}
      >
        <div className="stat" style={{ textAlign: 'center' }}>
          <div className="v">95k+</div>
          <div className="l">GitHub stars</div>
        </div>
        <div className="stat" style={{ textAlign: 'center' }}>
          <div className="v">17</div>
          <div className="l">plateformes</div>
        </div>
        <div className="stat" style={{ textAlign: 'center' }}>
          <div className="v">$0</div>
          <div className="l">MIT license</div>
        </div>
      </motion.div>
    </div>
  )
}
