import { motion } from 'framer-motion'

const MODELS = [
  { name: 'Opus 4.7',   role: 'Heavy reasoning',  cost: '$5/$25', share: 10, color: 'clay' },
  { name: 'Sonnet 4.6', role: 'Daily driver',     cost: '$3/$15', share: 20, color: 'purple' },
  { name: 'Haiku 4.5',  role: 'Fast & cheap',     cost: '$1/$5',  share: 70, color: 'green' },
]

export function WhatIsClaudeSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 32 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> 01 · Comprendre</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Claude, c'est <span className="gradient-text">3 modèles</span>.<br />
          Pas un chatbot.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Chaque modèle = un curseur prix/qualité. Le pattern qui marche en prod: <strong style={{ color: 'var(--accent)' }}>Haiku 70%, Sonnet 20%, Opus 10%</strong>.
        Save 51% vs uniform Opus. Validé Stripe, Block, Anthropic.
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {MODELS.map((m, i) => (
          <motion.div
            key={m.name}
            className="glass card-int"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + 0.15 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '20px 28px',
              display: 'grid',
              gridTemplateColumns: '180px 1fr 140px 100px',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <div>
              <div style={{ fontSize: 22, fontWeight: 700 }}>{m.name}</div>
              <div className="muted mono" style={{ fontSize: 12, marginTop: 2 }}>{m.role}</div>
            </div>
            <div className="bar" style={{ height: 14 }}>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: `${m.share}%` }}
                transition={{ delay: 0.8 + 0.15 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <div className="muted mono" style={{ fontSize: 13, fontWeight: 500 }}>{m.cost} /M</div>
            <span className={`tag ${m.color}`} style={{ justifyContent: 'center' }}>{m.share}%</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        style={{
          display: 'flex',
          gap: 32,
          padding: '20px 28px',
          background: 'var(--surface)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div className="stat">
          <div className="v">1M</div>
          <div className="l">tokens context max</div>
        </div>
        <div className="stat">
          <div className="v">90%</div>
          <div className="l">cache discount input</div>
        </div>
        <div className="stat">
          <div className="v">JSON</div>
          <div className="l">tool calling natif</div>
        </div>
      </motion.div>
    </div>
  )
}
