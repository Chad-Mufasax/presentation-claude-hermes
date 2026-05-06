import { motion } from 'framer-motion'

const INCIDENTS = [
  {
    name: 'OpenClaw / ClawHavoc',
    date: 'Jan-Apr 2026',
    severity: 'CVE-2026-32922 CVSS 9.9',
    body: '1,184+ skills malveillants flood ClawHub. Seul requirement = GitHub account >1 semaine. Payloads: AMOS macOS infostealers, reverse shells, memory poisoning SOUL.md/MEMORY.md.',
    lesson: 'Microsoft officiel: "treat OpenClaw as untrusted code execution". Cisco a sorti DefenseClaw post-attaque. AVOID en fintech.',
    color: 'clay',
  },
  {
    name: 'GitHub Copilot CVE-2025-53773',
    date: 'Q4 2025',
    severity: 'CVSS 9.6',
    body: 'Hidden prompt injection dans descriptions PR → RCE. Copilot exécutait silently les commandes embedded dans markdown.',
    lesson: 'Treat ALL untrusted text comme code potentiel. Sandbox tools execution. Approval gates pour shell commands.',
    color: 'clay',
  },
  {
    name: 'EchoLeak Microsoft 365 Copilot',
    date: 'Q1 2026',
    severity: 'Zero-click data exfil',
    body: 'Prompt injection embedded dans email/document → Copilot exfiltrait data enterprise vers attacker URL au summarize.',
    lesson: 'Allowlist egress strict — agents ne devraient JAMAIS pouvoir contacter URLs arbitraires. VCS + LLM endpoints only.',
    color: 'clay',
  },
  {
    name: 'Block Operation Pale Fire',
    date: 'Jan 2026',
    severity: 'Internal red team success',
    body: 'Block red team a compromis Goose via phishing + prompt injection (instructions dans Unicode invisible chars d\'une recipe).',
    lesson: 'JAMAIS enable auto-approve mode. Human-in-loop sur tool calls qui touchent état mutable.',
    color: 'purple',
  },
]

export function SecurityWarningsSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 21 · Security warnings</span>
      <h2 className="h2"><span className="gradient-text">L'année 2026</span> en agent security incidents.</h2>
      <p className="lede">
        Prompt injection n'est plus théorique. Supply chain attacks ciblent les marketplaces de skills.
        Memory poisoning persiste cross-session. Voici les 4 gros incidents — et leurs leçons.
      </p>

      <div className="grid grid-2" style={{ marginTop: 8, gap: 12 }}>
        {INCIDENTS.map((inc, i) => (
          <motion.div
            key={inc.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 * i }}
          >
            <div className="row" style={{ justifyContent: 'space-between', marginBottom: 6 }}>
              <div className="mono" style={{ fontWeight: 700, fontSize: 14 }}>{inc.name}</div>
              <span className={`tag ${inc.color}`} style={{ fontSize: 11 }}>{inc.date}</span>
            </div>
            <div className="muted" style={{ fontSize: 12, color: '#fca5a5', fontWeight: 700, marginBottom: 8 }}>
              {inc.severity}
            </div>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 8 }}>{inc.body}</p>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: 10 }}>
              <p className="muted" style={{ fontSize: 12, lineHeight: 1.5, fontStyle: 'italic', margin: 0 }}>
                💡 {inc.lesson}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Ce qu'on fait pour rester safe</h3>
        <div className="grid grid-4" style={{ gap: 10 }}>
          <div>
            <span className="tag green">✓</span>
            <p className="muted" style={{ fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>
              <strong>Skills self-generated only</strong> — pas de marketplace tiers (sidesteps ClawHavoc surface).
            </p>
          </div>
          <div>
            <span className="tag green">✓</span>
            <p className="muted" style={{ fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>
              <strong>Permissions allowlist</strong> Bash/WebFetch dans settings.json — failed-closed.
            </p>
          </div>
          <div>
            <span className="tag green">✓</span>
            <p className="muted" style={{ fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>
              <strong>Human review</strong> sur tout PR avant merge. Bot ne merge JAMAIS.
            </p>
          </div>
          <div>
            <span className="tag green">✓</span>
            <p className="muted" style={{ fontSize: 12, marginTop: 6, lineHeight: 1.4 }}>
              <strong>9 layers défense Hermes</strong> post-PayDunya — pre-push hook, gh wrapper, ppid check.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="glass" style={{ background: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.3)' }}>
        <p className="muted" style={{ fontSize: 13, lineHeight: 1.5, margin: 0 }}>
          <strong style={{ color: '#fca5a5' }}>⚠️ Pour fintech / Polymarket trading bot:</strong>
          {' '}repo séparé, Anthropic API direct (pas Hermes), agent gateway pattern, audit logs immutables, kill switch portfolio-level, cap per-trade hardcoded. EU AI Act août 2026 = HITL démontrable obligatoire.
        </p>
      </div>
    </div>
  )
}
