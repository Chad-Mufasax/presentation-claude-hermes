import { motion } from 'framer-motion'

const PHRASES = [
  {
    p: 'Cook me up…',
    d: 'Instead of asking for an answer, ask it to iterate, refine, polish.',
    ex: '"Cook me up an architecture plan for this auth module, 3 options."',
  },
  {
    p: 'Prove to me that…',
    d: 'Force empirical verification. It has to go fetch the proof, not speculate.',
    ex: '"Prove to me this function is called nowhere — grep the whole repo."',
  },
  {
    p: 'Throw it all out and start over.',
    d: 'When you\'re going the wrong way. Full reset, different angle.',
    ex: '"Throw it all out. Restart from the TypeScript docs, not the existing code."',
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
          The <span className="gradient-text">magic phrases</span>.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        3 phrasings that radically change the quality of the answers.
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
              "{p.p}"
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
