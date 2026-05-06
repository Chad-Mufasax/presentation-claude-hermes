import { motion } from 'framer-motion'

const POINTS = [
  { num: 1, t: 'Le modèle ≠ l\'outil', d: 'Claude est l\'ampoule. Le harness — CLAUDE.md, hooks, MCP, subagents — c\'est tout le reste.' },
  { num: 2, t: 'Capitalise dans CLAUDE.md', d: 'Chaque incident → règle. Chaque pattern répété → skill. Ta dette pédagogique devient permanent.' },
  { num: 3, t: 'Subagents pour le bruit', d: 'Recherche, review, exploration → délégués. Le parent reste compact, focused, propre.' },
  { num: 4, t: 'Plan avant code', d: 'Plan mode + TaskCreate. 5 min de design = 1h non gaspillée à débugger des hypothèses.' },
  { num: 5, t: 'Hermes pour le 24/7', d: 'Quand le terminal ne suffit plus. Cron + Telegram + multi-agent + mémoire persistante.' },
  { num: 6, t: 'Garde l\'humain dans la boucle', d: 'Aucune action destructive sans validation. Pas de auto-merge. Pas de auto-deploy prod.' },
]

export function TakeawaysSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 32 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> 26 · À retenir</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          6 idées à <span className="gradient-text">repartir avec</span>.
        </h2>
      </motion.div>

      <div className="grid grid-3" style={{ gap: 18 }}>
        {POINTS.map((p, i) => (
          <motion.div
            key={p.num}
            className="glass card-int"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 24 }}
          >
            <motion.div
              style={{
                fontSize: 48,
                fontWeight: 700,
                lineHeight: 1,
                background: 'var(--grad-warm)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                marginBottom: 12,
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            >
              0{p.num}
            </motion.div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.t}</div>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.55, margin: 0 }}>{p.d}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="glass"
        style={{
          background: 'linear-gradient(135deg, rgba(234,88,12,0.1), rgba(99,102,241,0.06))',
          padding: 28,
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 20, lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
          La question n'est plus <em>"est-ce que l'IA peut le faire?"</em>.<br />
          C'est <span className="gradient-text">"à quelle vitesse je peux la cabler à mon contexte ?"</span>
        </p>
      </motion.div>
    </div>
  )
}
