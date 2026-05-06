import { motion } from 'framer-motion'

const ITEMS = [
  { icon: '📏', t: '/compact', d: 'Claude résume toute la session en un bloc dense. Garde le fil, libère la fenêtre.' },
  { icon: '🧹', t: '/clear',   d: 'Repart de zéro. Idéal entre deux sujets sans rapport.' },
  { icon: '📌', t: 'CLAUDE.md', d: 'Le contexte permanent. Lu à chaque session — pas besoin de le répéter.' },
  { icon: '🧠', t: 'Memory',   d: 'Faits clés sur toi et le projet — persistent d\'une session à l\'autre.' },
]

export function ContextSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Contexte</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          La fenêtre se remplit — <span className="gradient-text">gère-la.</span>
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Le contexte = la mémoire de la session.
        <br />Quand il sature, la qualité chute. Deux réflexes suffisent.
      </motion.p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1100, margin: '0 auto' }}>
        {ITEMS.map((c, i) => (
          <motion.div
            key={c.t}
            className="glass card-int"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + 0.12 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 22, flex: '1 1 200px', maxWidth: 240, textAlign: 'center' }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              style={{ fontSize: 44, marginBottom: 8 }}
            >
              {c.icon}
            </motion.div>
            <div className="mono" style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: 'var(--accent)' }}>{c.t}</div>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, margin: 0 }}>{c.d}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="glass"
        style={{
          padding: 20,
          maxWidth: 700,
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(234,88,12,0.04))',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 17, margin: 0, lineHeight: 1.5 }}>
          <strong style={{ color: 'var(--indigo)' }}>À suivre →</strong>{' '}
          Les skills : capitaliser les workflows répétitifs en commandes réutilisables.
        </p>
      </motion.div>
    </div>
  )
}
