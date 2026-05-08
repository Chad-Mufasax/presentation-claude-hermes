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
    title: 'Flatten history',
    body: 'claude --print stream-json only reads ONE message. The shim folds N turns into a single structured user message (Previous conversation / Current).',
  },
  {
    title: 'Tools into system prompt',
    body: 'Anthropic API takes tools=[]. claude CLI does not. The shim serializes the 29 tools as instructions + <hermes_tool_use> tags to parse on the way back.',
  },
  {
    title: 'Tempfile when > 8 KB',
    body: 'argv has a hard limit. When system + tools exceeds 8 KB, the shim writes a temp file and passes --append-system-prompt-file instead of argv.',
  },
  {
    title: 'Total isolation',
    body: '--strict-mcp-config --setting-sources "" --tools "" : we neutralize plugins, MCP, CLAUDE.md auto-discovery. Opus only sees the injected Hermes tools.',
  },
  {
    title: 'Concurrent stderr drain',
    body: 'Unix pipes saturate at 64 KB. An asyncio.task drains stderr in parallel with stdout. Without it, claude crashes silently in verbose mode.',
  },
  {
    title: 'Tool_use re-translation',
    body: 'The shim parses <hermes_tool_use>{...}</hermes_tool_use> in Opus output, rebuilds native Anthropic tool_use blocks, stop_reason=tool_use.',
  },
]

export function HermesShimSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 18 · Hermes ↔ Max sub</span>
      <h2 className="h2">The shim — <span className="gradient-text">250 lines of Python</span> that route Hermes through my sub.</h2>
      <p className="lede">
        Before: Hermes called the Anthropic API directly → billed per token (Haiku $1/$5 per M tok).
        After: a local proxy spawns the <code style={{ background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: 4 }}>claude -p</code> binary
        as a subprocess → Anthropic sees the official tool → <strong style={{ color: 'var(--accent)' }}>Max regular quota</strong>, $0 per token.
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
          Why it works: Anthropic looks at the User-Agent. <code>claude-cli/2.1.128</code> = "official tool"
          → Max quota. A third-party SDK (e.g. meridian) = "third-party" → forced into paid extra usage since April 2026.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>The 6 transformations the shim performs</h3>
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
          <div className="stat"><div className="v">$0</div><div className="l">per Telegram message</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">Opus 4.7</div><div className="l">everywhere, Max sub</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">~250 lines</div><div className="l">Python (1 file)</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">launchd</div><div className="l">auto-restart at boot</div></div>
        </div>
      </div>
    </div>
  )
}
