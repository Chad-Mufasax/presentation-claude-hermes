import { motion } from 'framer-motion'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const TOKENS_DATA = Array.from({ length: 24 }, (_, i) => ({
  h: `${String(i).padStart(2, '0')}h`,
  in: 8000 + Math.round(Math.sin(i / 3) * 5000 + Math.random() * 4000),
  out: 1500 + Math.round(Math.cos(i / 4) * 900 + Math.random() * 800),
}))

const PAGES = [
  { icon: '📊', t: 'Overview',  d: 'Snapshot de tous les agents · état · running.' },
  { icon: '🤖', t: 'Agents',    d: 'Liste, pause/resume, tokens, dernière run, erreur.' },
  { icon: '🧪', t: 'Skills',    d: 'Skills disponibles, fréquence d’usage, perfs.' },
  { icon: '🧠', t: 'Reasoning', d: 'Traces de thinking — lire ce que l’agent a vraiment pensé.' },
  { icon: '📡', t: 'Live log',  d: 'Tail temps réel sur ~/.hermes/logs/agent.log.' },
  { icon: '📈', t: 'Analytics', d: 'Tokens, runs, taux d’erreur, par jour / agent / modèle.' },
  { icon: '💰', t: 'Budget',    d: 'Cost USD avec pricing par modèle. Alertes seuil.' },
]

export function HermesMonitorSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 14 · Hermes Monitor</span>
      <h2 className="h2">Le dashboard <span className="gradient-text">React + SQLite</span> que j’ai construit pour le piloter.</h2>
      <p className="lede">
        Hermes écrit son état dans <span className="mono">~/.hermes/state.db</span> (SQLite WAL). Mon app web local le lit en read-only,
        affiche tout, et exécute des actions via une API Express en port 4243.
      </p>

      <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
            <h3 className="h3">Tokens / heure (24h)</h3>
            <span className="tag cyan">live</span>
          </div>
          <div style={{ height: 220 }}>
            <ResponsiveContainer>
              <AreaChart data={TOKENS_DATA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="cIn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d97757" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#d97757" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="cOut" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="h" stroke="#7a7468" fontSize={11} />
                <YAxis stroke="#7a7468" fontSize={11} />
                <Tooltip
                  contentStyle={{ background: '#14111f', border: '1px solid #2a2438', borderRadius: 8, color: '#efe9e1' }}
                />
                <Area type="monotone" dataKey="in" stroke="#d97757" fill="url(#cIn)" />
                <Area type="monotone" dataKey="out" stroke="#c084fc" fill="url(#cOut)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="row" style={{ marginTop: 8 }}>
            <span className="tag clay">input</span>
            <span className="tag purple">output</span>
            <span className="muted mono" style={{ fontSize: 11, marginLeft: 'auto' }}>données simulées · ce slide</span>
          </div>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Pages du dashboard</h3>
          <div className="col" style={{ marginTop: 10 }}>
            {PAGES.map((p) => (
              <div key={p.t} className="row" style={{ alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 18 }}>{p.icon}</span>
                <div>
                  <div style={{ fontWeight: 600 }}>{p.t}</div>
                  <div className="muted" style={{ fontSize: 12.5 }}>{p.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>
        <h3 className="h3" style={{ marginBottom: 8 }}>Le bouton qui m’évite de tout casser</h3>
        <div className="row" style={{ gap: 18, alignItems: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'var(--danger)', color: '#1c1410', border: 0,
            padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer',
          }}>🔒 Close company</button>
          <button style={{
            background: 'var(--accent-5)', color: '#1c1410', border: 0,
            padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer',
          }}>🔓 Open company</button>
          <p className="muted" style={{ fontSize: 14, maxWidth: 60 + 'ch', lineHeight: 1.55 }}>
            Un click, tous les agents sont mis en pause. Pratique quand un cron part en boucle ou
            que je dois debug une régression sans bruit. C’est mon « kill switch » mental.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
