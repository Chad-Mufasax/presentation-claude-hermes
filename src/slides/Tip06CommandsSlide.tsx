import { motion } from 'framer-motion'

const COMMANDS = [
  { cmd: '/email-relance', d: 'Relance cliente avec ton ton', icon: '✉️' },
  { cmd: '/poste-linkedin', d: 'Brouillon depuis tes notes', icon: '💼' },
  { cmd: '/standup', d: 'Récap PRs/issues du jour', icon: '📊' },
  { cmd: '/review-pr', d: 'Review systématique selon ta checklist', icon: '🔍' },
]

export function Tip06CommandsSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 06</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Tu le fais 2× / jour ? <span className="gradient-text">→ commande.</span>
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Une fois suffit pour décrire la tâche. Après, c'est <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>/ma-commande</span>.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 800, margin: '0 auto', width: '100%' }}>
        {COMMANDS.map((c, i) => (
          <motion.div
            key={c.cmd}
            className="glass card-int"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + 0.1 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <motion.div
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              style={{ fontSize: 36 }}
            >
              {c.icon}
            </motion.div>
            <div>
              <div className="mono" style={{ fontSize: 17, fontWeight: 700, color: 'var(--accent)' }}>{c.cmd}</div>
              <div className="muted" style={{ fontSize: 14, marginTop: 4 }}>{c.d}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ textAlign: 'center', fontSize: 16, color: 'var(--text-dim)', maxWidth: 700, margin: '0 auto' }}
      >
        Création : un fichier markdown dans <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>~/.claude/commands/</span>.
        <br />C'est tout. Tu écris la procédure une fois.
      </motion.div>
    </div>
  )
}
