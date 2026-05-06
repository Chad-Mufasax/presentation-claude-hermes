import { motion } from 'framer-motion'

const TEAMS = [
  {
    icon: '🛡',
    name: 'Cyber',
    sources: 'NVD CVE · GitHub Advisories · supply chain npm/pypi',
    example: 'CVE-2026-32xxx — n8n < 1.32 — 4 clients impactés',
    color: 'clay',
  },
  {
    icon: '🤖',
    name: 'IA',
    sources: 'arxiv · releases SDK Anthropic/OpenAI · GitHub trending',
    example: 'Sonnet 4.7 sortie — 30 % moins cher sur cas X',
    color: 'purple',
  },
  {
    icon: '🏭',
    name: 'Logistique / WCS',
    sources: 'spec projet client · scan réseau · PLCs · events WMS',
    example: 'Nouveau scanner SICK zone B — déclaré WCS, mapping OPC-UA, integration test ready',
    color: 'cyan',
  },
  {
    icon: '💻',
    name: 'Code',
    sources: 'GitHub Enjoy · PRs stales · CI fails · Dependabot',
    example: 'PR #234 sans review depuis 3 j — main rouge depuis 6h',
    color: 'green',
  },
]

export function EnjoyUseCaseSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 32 }}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <span className="eyebrow"><span className="dot" /> 20 · Cas d'usage Enjoy · Veille</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Un <span className="gradient-text">Trello par équipe</span>. Hermes l'alimente.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
      >
        Pas un nouvel outil à adopter. Hermes veille H24 (RSS, GitHub, changelogs),
        Opus filtre le pertinent, et une <strong style={{ color: 'var(--accent)' }}>carte Trello</strong> apparaît
        sur le board de l'équipe concernée. Le matin, tu regardes ton board — c'est tout.
      </motion.p>

      <div className="grid grid-2" style={{ gap: 16 }}>
        {TEAMS.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + 0.08 * i, duration: 0.5 }}
            style={{ padding: 20 }}
          >
            <div className="row" style={{ alignItems: 'center', gap: 14, marginBottom: 10 }}>
              <div style={{ fontSize: 32 }}>{t.icon}</div>
              <div className="mono" style={{ fontWeight: 700, fontSize: 18 }}>{t.name}</div>
              <span className={`tag ${t.color}`} style={{ fontSize: 11, marginLeft: 'auto' }}>1 board</span>
            </div>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>
              <strong style={{ color: 'var(--text)' }}>Sources :</strong> {t.sources}
            </p>
            <div style={{
              borderLeft: '2px solid rgba(255,255,255,0.2)',
              paddingLeft: 10,
              fontSize: 12,
              fontStyle: 'italic',
              color: 'var(--text-mute)',
              lineHeight: 1.5,
            }}>
              💡 Exemple carte : <span style={{ color: 'var(--text)' }}>{t.example}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="row"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        style={{ justifyContent: 'center', gap: 18, marginTop: 8 }}
      >
        <span className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>cron</span>
        <span style={{ color: 'var(--text-mute)' }}>→</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>fetch</span>
        <span style={{ color: 'var(--text-mute)' }}>→</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--accent)' }}>Opus juge</span>
        <span style={{ color: 'var(--text-mute)' }}>→</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--text-mute)' }}>Trello API</span>
      </motion.div>
    </div>
  )
}
