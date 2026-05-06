import { motion } from 'framer-motion'

const CASES = [
  {
    icon: '👥',
    name: 'R&D Coordinator',
    sources: 'Trello clients + R&D · GitHub Enjoy',
    action: 'Regroupe les cartes par topic · attribue aux devs · ouvre un PR par point avec bilan',
    example: '3 cartes "Hubspot rate-limit" regroupées → PR #142 + bilan 5 lignes',
    color: 'purple',
  },
  {
    icon: '📞',
    name: 'Lead qualifier',
    sources: 'Emails entrants · landing form · LinkedIn · web scrape',
    action: 'Scoring Opus 0-100 · deal Hubspot pré-rempli · alerte sales si > 70',
    example: 'Lead "Acme Corp" — score 84/100, email pré-rédigé, deal créé',
    color: 'cyan',
  },
  {
    icon: '📊',
    name: 'Reports clients auto',
    sources: 'Métriques workflows · uptime · volumes · incidents',
    action: 'Tous les 1ers du mois 8h → PDF par client → email signé du commercial responsable',
    example: 'Mai 2026 — 12 clients, 12 PDFs envoyés en 4 min',
    color: 'green',
  },
  {
    icon: '🤝',
    name: 'Sales call prep',
    sources: 'Calendrier Google · web entreprise · Hubspot history',
    action: '15 min avant le call → brief WhatsApp : entreprise, news 7j, dernier contact, 3 questions clés',
    example: '"Call Acme à 14h. Stack n8n+Hubspot. Levée 3M€ hier. Pose Q sur growth."',
    color: 'clay',
  },
  {
    icon: '🔧',
    name: 'Doc auto-update',
    sources: 'Webhook n8n · diff GitHub · changelog repo',
    action: 'Workflow modifié en prod → page Confluence/Notion mise à jour automatiquement',
    example: 'Workflow "UPS-tracking" v2 → doc updated, capture nouvelle archi',
    color: 'cyan',
  },
]

export function EnjoyUseCase2Slide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 21 · Cas d'usage Enjoy · Actions</span>
      <h2 className="h2">Hermes ne fait pas que <span className="gradient-text">veiller</span> — il <span className="gradient-text">agit</span>.</h2>
      <p className="lede">
        La veille remplit des Trello. L'action remplit Hubspot, ouvre des PR, envoie des reports,
        prépare tes calls. Toujours le même pattern : trigger → skill déterministe → Opus si raisonnement → action.
      </p>

      <div className="col" style={{ gap: 10, marginTop: 8 }}>
        {CASES.map((c, i) => (
          <motion.div
            key={c.name}
            className="glass card-int"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
            style={{ padding: '12px 18px' }}
          >
            <div className="row" style={{ alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: 34, minWidth: 44, textAlign: 'center' }}>{c.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="row" style={{ alignItems: 'center', gap: 12, marginBottom: 4 }}>
                  <div className="mono" style={{ fontWeight: 700, fontSize: 15 }}>{c.name}</div>
                  <span className={`tag ${c.color}`} style={{ fontSize: 10 }}>{c.sources.split('·')[0].trim()}</span>
                </div>
                <p className="muted" style={{ fontSize: 12.5, lineHeight: 1.5, margin: '4px 0' }}>
                  <strong style={{ color: 'var(--text)' }}>Action :</strong> {c.action}
                </p>
                <div style={{
                  fontSize: 11.5,
                  fontStyle: 'italic',
                  color: 'var(--text-mute)',
                  borderLeft: '2px solid rgba(255,255,255,0.18)',
                  paddingLeft: 10,
                  marginTop: 4,
                }}>
                  💡 <span style={{ color: 'var(--text)' }}>{c.example}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
