import { motion } from 'framer-motion'

const SERVERS = [
  { name: 'Neon',          status: 'connected',  scope: 'Postgres serverless DB query',     example: 'mcp run_sql "SELECT count(*) FROM users WHERE kyc_status=true"', icon: '🗃️', color: 'cyan' },
  { name: 'Vercel',        status: 'auth needed', scope: 'Deploy logs, env, build status', example: 'vercel:deploy prod', icon: '▲', color: 'purple' },
  { name: 'Notion',        status: 'connected',  scope: 'Pages, databases, comments',       example: 'notion-search "auth refactor spec"', icon: '📝', color: 'green' },
  { name: 'Pixa',          status: 'connected',  scope: 'AI image/video gen + edit',         example: 'generate_media model="gemini-3-flash" prompt="..."', icon: '🎨', color: 'clay' },
  { name: 'Google Drive',  status: 'connected',  scope: 'Read/write Docs, Sheets, files',  example: 'search_files "Q3 roadmap"', icon: '📂', color: 'cyan' },
  { name: 'Gmail',         status: 'connected',  scope: 'Search, drafts, labels',           example: 'search_threads "from:stripe last:7d"', icon: '📧', color: 'green' },
  { name: 'Google Cal',    status: 'auth needed', scope: 'Events, scheduling',              example: 'list-events week', icon: '📅', color: 'purple' },
  { name: 'PostHog',       status: 'auth needed', scope: 'Analytics, funnels, replays',    example: 'query_events "signup last:30d"', icon: '📊', color: 'clay' },
]

export function MyMcpServersSlide() {
  const connected = SERVERS.filter(s => s.status === 'connected').length
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 09 · MCP Servers</span>
      <h2 className="h2">Mes 8 MCP servers — <span className="gradient-text">les bras de Claude</span> hors-codebase.</h2>
      <p className="lede">
        Chaque server = un tool spécialisé. Claude accède à ta DB, ton Notion, ton Vercel, ton Gmail
        en lecture/écriture, sans copier-coller, sans changer d'app. <strong>{connected}/8 connectés.</strong>
      </p>

      <div className="grid grid-4" style={{ marginTop: 8 }}>
        {SERVERS.map((srv, i) => (
          <motion.div
            key={srv.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 * i }}
          >
            <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="row" style={{ gap: 8 }}>
                <span style={{ fontSize: 20 }}>{srv.icon}</span>
                <div className="mono" style={{ fontWeight: 700 }}>{srv.name}</div>
              </div>
              <span className={`tag ${srv.status === 'connected' ? 'green' : 'clay'}`} style={{ fontSize: 11 }}>
                {srv.status === 'connected' ? '✓' : '⚠'}
              </span>
            </div>
            <p className="muted" style={{ fontSize: 12, marginTop: 8, lineHeight: 1.4 }}>{srv.scope}</p>
            <div className="code" style={{ fontSize: 11, marginTop: 8, maxHeight: 70, overflow: 'hidden' }}>
              {srv.example}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Use case réel — fix CVE BackEnd</h3>
        <div className="grid grid-3" style={{ alignItems: 'flex-start', gap: 12 }}>
          <div>
            <span className="tag cyan">1</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              <strong>Neon</strong> → query users impactés par la vuln, vérifie data integrity.
            </p>
          </div>
          <div>
            <span className="tag green">2</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              <strong>GitHub</strong> (gh CLI) → liste PRs ouverts dans le repo, identifier conflits.
            </p>
          </div>
          <div>
            <span className="tag purple">3</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              <strong>Vercel</strong> → check deploy logs après merge, valider sans changer d'onglet.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-3" style={{ marginTop: 8 }}>
        <div className="glass">
          <div className="stat"><div className="v">{connected}</div><div className="l">connectés</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">~250</div><div className="l">tools cumulés disponibles</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">0</div><div className="l">copy-paste manuel</div></div>
        </div>
      </div>
    </div>
  )
}
