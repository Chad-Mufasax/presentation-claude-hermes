import { motion } from 'framer-motion'

const PIPELINE_STEPS = [
  { n: 1, label: 'Hermes', sub: 'POST /v1/messages' },
  { n: 2, label: 'Shim', sub: '127.0.0.1:3456' },
  { n: 3, label: 'claude --print', sub: 'subprocess' },
  { n: 4, label: 'OAuth keychain', sub: 'sub Max regular' },
  { n: 5, label: 'Anthropic', sub: 'api.anthropic.com' },
]

const TRANSFORMATIONS = [
  {
    title: 'Aplatir l\'historique',
    body: 'claude --print stream-json ne lit qu\'UN message. Le shim fusionne les N tours en un seul user message structuré (Previous conversation / Current).',
  },
  {
    title: 'Tools en system prompt',
    body: 'Anthropic API a tools=[]. claude CLI ne sait pas en accepter. Le shim sérialise les 29 tools en instructions + balises <hermes_tool_use> à parser au retour.',
  },
  {
    title: 'Tempfile si > 8 KB',
    body: 'argv système plafonne. Quand le system + tools dépasse 8 KB, le shim écrit un fichier temp et passe --append-system-prompt-file au lieu de l\'argv.',
  },
  {
    title: 'Isolation totale',
    body: '--strict-mcp-config --setting-sources "" --tools "" : on neutralise plugins, MCP, CLAUDE.md auto-discovery. Opus ne voit QUE les tools Hermes injectés.',
  },
  {
    title: 'Stderr drain concurrent',
    body: 'Pipe Unix sature à 64 KB. asyncio.task draine stderr en parallèle de stdout. Sans ça, claude crash silencieux quand verbose.',
  },
  {
    title: 'Re-traduction tool_use',
    body: 'Le shim parse <hermes_tool_use>{...}</hermes_tool_use> dans la réponse Opus, reconstruit des blocks tool_use Anthropic natifs, stop_reason=tool_use.',
  },
]

export function HermesShimSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 18 · Hermes ↔ sub Max</span>
      <h2 className="h2">Le shim — <span className="gradient-text">250 lignes Python</span> qui fait passer Hermes par ma sub.</h2>
      <p className="lede">
        Avant : Hermes appelait l'API Anthropic en direct → facturé per token (Haiku $1/$5 par M tok).
        Après : un proxy local lance le binaire <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: 4 }}>claude -p</code> en
        subprocess → Anthropic voit l'outil officiel → <strong style={{ color: 'var(--accent)' }}>quota Max regular</strong>, $0 token.
      </p>

      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Pipeline</h3>
        <div className="flow">
          {PIPELINE_STEPS.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="step">
                <div className="node" style={{
                  background: i === 1 ? 'linear-gradient(135deg, rgba(120,180,255,0.25), rgba(80,140,220,0.15))' : undefined,
                  borderColor: i === 1 ? 'rgba(120,180,255,0.5)' : undefined,
                }}>
                  <div className="t">{s.label}</div>
                  <div className="v" style={{ fontSize: 11 }}>{s.sub}</div>
                </div>
              </div>
              {i < PIPELINE_STEPS.length - 1 && <div className="arrow">→</div>}
            </div>
          ))}
        </div>
        <p className="muted" style={{ fontSize: 12, marginTop: 8, fontStyle: 'italic' }}>
          Pourquoi ça marche : Anthropic regarde le User-Agent. <code>claude-cli/2.1.128</code> = "outil officiel"
          → quota Max. Un SDK tiers (meridian) = "third-party" → forcé en extra usage payant depuis avril 2026.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Les 6 transformations qu'effectue le shim</h3>
        <div className="grid grid-3" style={{ gap: 10 }}>
          {TRANSFORMATIONS.map((t, i) => (
            <motion.div
              key={t.title}
              className="glass"
              style={{ padding: 12, background: 'rgba(255,255,255,0.03)' }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + 0.05 * i }}
            >
              <div className="mono" style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{t.title}</div>
              <p className="muted" style={{ fontSize: 11.5, lineHeight: 1.45, margin: 0 }}>{t.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-4" style={{ marginTop: 8, gap: 10 }}>
        <div className="glass">
          <div className="stat"><div className="v">$0</div><div className="l">par message Telegram</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">Opus 4.7</div><div className="l">partout, sub Max</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">~250 lignes</div><div className="l">Python (1 fichier)</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">launchd</div><div className="l">auto-restart au boot</div></div>
        </div>
      </div>
    </div>
  )
}
