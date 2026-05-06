import { motion } from 'framer-motion'

const TOOLS = [
  { icon: '💬', name: 'Slack', d: 'Cherche, résume, poste' },
  { icon: '✉️', name: 'Gmail', d: 'Lit, drafts, classe' },
  { icon: '📝', name: 'Notion', d: 'Crée pages, recherche' },
  { icon: '📅', name: 'Calendar', d: 'Vérifie, planifie' },
  { icon: '📁', name: 'Drive', d: 'Lit, crée, partage' },
  { icon: '🐙', name: 'GitHub', d: 'PRs, issues, commits' },
]

export function Tip07ConnectSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 36 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Tip 07</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Connecte tes <span className="gradient-text">outils du quotidien</span>.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 22 }}
      >
        Slack, Gmail, Notion, Calendar… via <strong style={{ color: 'var(--accent)' }}>MCP</strong>.
        <br />Claude lit ton vrai contexte. Plus de copier-coller.
      </motion.p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', maxWidth: 900, margin: '0 auto' }}>
        {TOOLS.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass card-int"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5 + 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 20,
              minWidth: 160,
              flex: '1 1 160px',
              maxWidth: 200,
              textAlign: 'center',
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
              style={{ fontSize: 44, marginBottom: 8 }}
            >
              {t.icon}
            </motion.div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{t.name}</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{t.d}</div>
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
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(234,88,12,0.04))',
        }}
      >
        <p style={{ fontSize: 16, margin: 0, lineHeight: 1.6 }}>
          <em>« Résume mon thread Slack #incidents et drafte un postmortem dans Notion. »</em>
          <br />
          <span className="muted" style={{ fontSize: 13 }}>Une seule commande. 3 outils. 2 minutes.</span>
        </p>
      </motion.div>
    </div>
  )
}
