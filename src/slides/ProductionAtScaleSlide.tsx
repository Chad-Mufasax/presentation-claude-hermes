import { motion } from 'framer-motion'

const COMPANIES = [
  {
    name: 'Stripe',
    tag: 'Minions',
    desc: '1,300+ PRs/semaine générés autonomes. Forké de Goose. Blueprints en code, CI gates avant human review. Tasks viennent Slack/bug reports/feature queue.',
    color: 'purple',
    metric: '1,300 PR/sem',
  },
  {
    name: 'Block',
    tag: 'Goose',
    desc: 'Local-first by design. Zéro prompt/output sur réseau externe (fintech requirement). Rust + MCP only. Linux Foundation project depuis Dec 2025.',
    color: 'cyan',
    metric: 'Local-first',
  },
  {
    name: 'Fortune 500',
    tag: 'Cursor',
    desc: '64% pénétration daily IDE work. Combo standard avec Claude Code pour large refacto + audit. NPS Claude Code: +58.',
    color: 'green',
    metric: '64% F500',
  },
  {
    name: 'Goldman / Santander / Nubank',
    tag: 'Devin',
    desc: 'Tasks autonomes well-defined. 67% PR merge rate. 85% failure sur ambiguous. Coût opaque, $20/mo + ACU credits unpredictable.',
    color: 'clay',
    metric: '67% merge',
  },
]

const PATTERNS = [
  { title: 'Agent gateway central', body: 'Intercepte tools calls AVANT exécution. Policy + audit + rate limiting per team. Pas d\'API keys directes par dev.' },
  { title: 'Per-agent RBAC', body: 'Chaque agent = identité avec credentials scopés. Compromis = blast radius limité. SOC 2 Type II requis.' },
  { title: 'gVisor / Kata sandbox', body: 'Runtime isolation pour exécution code agent. Allowlist egress proxy (VCS + LLM only, fail closed).' },
  { title: 'KV cache isolation per-tenant', body: 'NDSS 2025: shared prefix caches leak cross-tenant data. vLLM séparé par tenant en prod multi-client.' },
  { title: 'Audit logging', body: 'Chaque agent action = log avec full reasoning chain. EU AI Act août 2026: HITL démontrable obligatoire pour high-risk systems.' },
  { title: 'Approval gates financial', body: 'Action toucher transactions/financial data = human approval queue. Constitutional AI au model level (Claude built-in).' },
]

export function ProductionAtScaleSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 19 · Production at scale</span>
      <h2 className="h2">Comment les <span className="gradient-text">grosses boîtes</span> tournent ça en prod.</h2>
      <p className="lede">
        Reality check: <strong>14% seulement</strong> des deploys agents atteignent production scale (650 enterprises survey, mars 2026).
        86% bloqués par <strong>monitoring + ownership + eval</strong>, pas qualité modèle. Les survivants ont une équipe AI ops dédiée.
      </p>

      <div className="grid grid-4" style={{ marginTop: 8 }}>
        {COMPANIES.map((c, i) => (
          <motion.div
            key={c.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="mono" style={{ fontWeight: 700 }}>{c.name}</div>
              <span className={`tag ${c.color}`} style={{ fontSize: 11 }}>{c.tag}</span>
            </div>
            <div className="muted" style={{ fontSize: 11, marginTop: 4, fontWeight: 700 }}>{c.metric}</div>
            <p className="muted" style={{ fontSize: 12, marginTop: 8, lineHeight: 1.4 }}>{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>6 patterns architecturaux non-négociables (fintech)</h3>
        <div className="grid grid-3">
          {PATTERNS.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass"
              style={{ padding: 12, background: 'rgba(255,255,255,0.03)' }}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i + 0.4 }}
            >
              <div className="mono" style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{p.title}</div>
              <p className="muted" style={{ fontSize: 12, lineHeight: 1.4, margin: 0 }}>{p.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-3" style={{ marginTop: 8 }}>
        <div className="glass">
          <div className="stat"><div className="v">14%</div><div className="l">deploys atteignent scale</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">86%</div><div className="l">bloqués par observability</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">Aug 26</div><div className="l">EU AI Act enforcement</div></div>
        </div>
      </div>
    </div>
  )
}
