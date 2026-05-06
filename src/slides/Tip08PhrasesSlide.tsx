import { motion } from 'framer-motion'

const PHRASES = [
  {
    p: 'Cuisine-moi…',
    d: 'Au lieu de demander une réponse, demande qu\'il itère, raffine, peaufine.',
    ex: '« Cuisine-moi un plan d\'archi pour ce module. »',
  },
  {
    p: 'Prouve-moi que…',
    d: 'Force la vérification empirique. Il doit aller chercher la preuve, pas spéculer.',
    ex: '« Prouve-moi que cette fonction est appelée nulle part. »',
  },
  {
    p: 'Jette tout et refais.',
    d: 'Quand tu pars dans le mauvais sens. Reset complet, autre angle.',
    ex: '« Jette tout. Repars de la doc, pas du code existant. »',
  },
]

export function Tip08PhrasesSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 08</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Les <span className="gradient-text">phrases magiques</span>.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        3 formulations qui changent radicalement la qualité des réponses.
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, margin: '0 auto', width: '100%' }}>
        {PHRASES.map((p, i) => (
          <motion.div
            key={p.p}
            className="glass card-int"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + 0.15 * i, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 24,
              display: 'flex',
              gap: 24,
              alignItems: 'center',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              style={{
                fontSize: 32,
                fontWeight: 800,
                background: 'var(--grad-warm)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                whiteSpace: 'nowrap',
                fontStyle: 'italic',
              }}
            >
              « {p.p} »
            </motion.div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 15, lineHeight: 1.5, margin: 0, marginBottom: 6 }}>{p.d}</p>
              <p className="mono muted" style={{ fontSize: 13, margin: 0, fontStyle: 'italic' }}>{p.ex}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
