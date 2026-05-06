import { motion } from 'framer-motion'

const PHRASES = [
  {
    p: 'Itère jusqu\'à…',
    d: 'Au lieu d\'attendre une réponse, demande-lui de raffiner par passes successives jusqu\'à un critère mesurable.',
    ex: '« Itère sur ce plan d\'archi auth jusqu\'à ce qu\'il tienne en 5 lignes. »',
  },
  {
    p: 'Démontre que…',
    d: 'Force la vérification empirique. Il doit produire la preuve par grep, par test, par exécution — pas par raisonnement seul.',
    ex: '« Démontre que cette fonction n\'est appelée nulle part — grep tout le repo, montre la sortie. »',
  },
  {
    p: 'Repars de zéro.',
    d: 'Quand la trajectoire dérive : reset complet, redémarre depuis la doc ou la spec, pas depuis le code en cours.',
    ex: '« Repars de zéro. Lis la doc TypeScript sur les conditional types, oublie le code actuel. »',
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
