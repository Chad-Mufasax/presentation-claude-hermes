import { motion } from 'framer-motion'

export function HermesArchSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 11 · Architecture</span>
      <h2 className="h2">Une <span className="gradient-text">gateway</span>, des <span className="gradient-text">agents</span>, des <span className="gradient-text">sandboxes</span>.</h2>

      <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Filesystem ~/.hermes/</h3>
          <pre className="code" style={{ marginTop: 10, fontSize: 12, lineHeight: 1.55 }}>
{`~/.hermes/
├─ config.yaml          # provider, model, defaults
├─ SOUL.md              # persona principal de l'agent
├─ state.db             # sqlite : sessions + tokens + costs
├─ gateway.pid          # daemon de routing actif
├─ cron/jobs.json       # crons schedulés
├─ sessions/            # historique par conversation
├─ skills-v2/           # bibliothèque de skills
├─ memories/            # faits durables
├─ sandboxes/           # workspaces dockerisés
├─ hooks/               # scripts pre/post-tool
├─ logs/agent.log       # tail -f en live
├─ channel_directory.json  # whatsapp / telegram / ...
└─ mufasax-agents/      # mes agents custom`}
          </pre>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Flow d’un message</h3>
          <div className="col" style={{ marginTop: 10 }}>
            {[
              { n: 1, t: 'Channel', d: 'WhatsApp / Telegram / CLI envoie un message.' },
              { n: 2, t: 'Gateway', d: 'Daemon Hermes route vers le bon agent (par règle ou contact).' },
              { n: 3, t: 'Session', d: 'L’agent ouvre/reprend sa session, charge ses skills + memories.' },
              { n: 4, t: 'Tool loop', d: 'terminal · file · cronjob · memory · clarify · skill...' },
              { n: 5, t: 'Sandbox', d: 'Les commandes shell tournent dans un container isolé.' },
              { n: 6, t: 'Reply', d: 'Texte final renvoyé par le canal d’origine.' },
            ].map((s) => (
              <div key={s.n} className="row" style={{ alignItems: 'flex-start', gap: 12 }}>
                <div className="mono" style={{
                  width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 8, background: 'var(--surface-2)', border: '1px solid var(--border)',
                  fontSize: 12, color: 'var(--accent-1)',
                }}>{s.n}</div>
                <div>
                  <div style={{ fontWeight: 600 }}>{s.t}</div>
                  <div className="muted" style={{ fontSize: 13 }}>{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Schéma d’ensemble</h3>
        <div className="flow">
          <div className="step">
            <div className="node glow-cyan">
              <div className="t">Canaux</div>
              <div className="v">WhatsApp · CLI · Web · Cron</div>
            </div>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="node glow-clay">
              <div className="t">Gateway</div>
              <div className="v">Routing · sessions · auth</div>
            </div>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="node glow-purple">
              <div className="t">Agents</div>
              <div className="v">SOUL · skills · memory</div>
            </div>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="node">
              <div className="t">Providers</div>
              <div className="v">Anthropic · NousResearch · Qwen · Llama</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
