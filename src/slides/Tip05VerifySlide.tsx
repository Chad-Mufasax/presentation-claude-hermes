import { motion } from 'framer-motion'

export function Tip05VerifySlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 05</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Donne-lui les <span className="gradient-text">moyens de vérifier</span>.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Sans feedback, Claude code à l'aveugle.
        <br />Donne-lui un moyen de <strong style={{ color: 'var(--accent)' }}>voir le résultat</strong>.
      </motion.p>

      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 1100, margin: '0 auto' }}>
        {[
          { icon: '🧪', t: 'Tests', d: 'npm test, pytest. Il les lance, voit ce qui passe.' },
          { icon: '🌐', t: 'Browser', d: 'Extension Chrome → screenshot de la page rendue.' },
          { icon: '📋', t: 'Logs', d: 'Pipe-lui ta sortie d\'erreur. Il debug à partir du vrai output.' },
          { icon: '🔍', t: 'Type-check', d: 'tsc, mypy. La compile lui dit si ça passe.' },
        ].map((c, i) => (
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
            <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{c.t}</div>
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
          background: 'linear-gradient(135deg, rgba(34,197,94,0.08), rgba(99,102,241,0.04))',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 17, margin: 0, lineHeight: 1.5 }}>
          <strong style={{ color: 'var(--green)' }}>Règle d'or</strong> : si tu peux le vérifier, lui aussi.
          <br />
          <span className="muted" style={{ fontSize: 14 }}>UI ? screenshot. API ? curl. Code ? lint + test.</span>
        </p>
      </motion.div>
    </div>
  )
}
