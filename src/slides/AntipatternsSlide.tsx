import { motion } from 'framer-motion'

const ANTI = [
  {
    bad: 'Re-prompter à chaque petit changement',
    why: 'Le contexte grossit, le cache se casse, la facture explose.',
    fix: 'Fais une todo claire avec TaskCreate. Laisse-le aller jusqu’au bout, puis review.',
    color: 'danger',
  },
  {
    bad: 'Le laisser créer des README et docs',
    why: 'Il en met partout. Bruit dans le repo, confusion à la review.',
    fix: 'Dans CLAUDE.md : « ne crée pas de doc sans demande explicite ».',
    color: 'warn',
  },
  {
    bad: 'Tout faire en Opus 4.7',
    why: 'C’est la Ferrari. Pour un grep, tu prends un vélo.',
    fix: 'Subagents en Sonnet, et bascule en Sonnet pour les sessions de gros volume.',
    color: 'warn',
  },
  {
    bad: 'Pas de plan, on pisse du code',
    why: 'Il part dans une direction, tu corriges, il repart, tu re-corriges.',
    fix: 'Plan mode (`Shift+Tab`) ou agent Plan. 5 min de design = 1h gagnée.',
    color: 'danger',
  },
  {
    bad: 'Permissions par défaut',
    why: 'Tu valides 50 prompts /h. Tu finis par cliquer sans lire.',
    fix: 'Skill `fewer-permission-prompts` puis revue manuelle de l’allowlist.',
    color: 'warn',
  },
  {
    bad: 'Confier des secrets en clair',
    why: 'Les tokens passent dans le contexte du modèle, dans la mémoire, dans les logs.',
    fix: 'Variables d’env, secret managers, et permissions explicites sur ce qu’il peut lire.',
    color: 'danger',
  },
]

export function AntipatternsSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 08 · Anti-patterns</span>
      <h2 className="h2">Les 6 trucs qui te <span className="gradient-text">ralentissent</span> sans que tu t’en rendes compte.</h2>

      <div className="grid grid-3">
        {ANTI.map((a, i) => (
          <motion.div
            key={i}
            className="glass"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="row" style={{ marginBottom: 10 }}>
              <span className={`tag ${a.color}`}>{i + 1}</span>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{a.bad}</div>
            </div>
            <div style={{ marginBottom: 10 }}>
              <div className="muted mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 4 }}>Pourquoi c’est mal</div>
              <div className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>{a.why}</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 4, color: 'var(--accent-5)' }}>✓ Fix</div>
              <div style={{ fontSize: 13, lineHeight: 1.5 }}>{a.fix}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
