import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts'

const TOOLS = [
  { name: 'Cline (BYOM)', baseline: 0,    heavy: 5,   color: '#67e8f9', desc: 'Free baseline, $3-8/h API rates Sonnet' },
  { name: 'Cursor Pro', baseline: 20,     heavy: 80,  color: '#a78bfa', desc: 'Credits depleted en 1 jour reportés sur agentic' },
  { name: 'Devin', baseline: 20,          heavy: 100, color: '#f87171', desc: '$20/mo + ACU costs unpredictable' },
  { name: 'Claude Code', baseline: 20,    heavy: 150, color: '#34d399', desc: 'Max $20 → $100-200 réel agentic' },
]

const ROUTING = [
  { tier: 'Haiku 4.5', share: 70, color: '#67e8f9', cost: '$1/M in · $5/M out' },
  { tier: 'Sonnet 4.6', share: 20, color: '#a78bfa', cost: '$3/M in · $15/M out' },
  { tier: 'Opus 4.7', share: 10, color: '#f87171', cost: '$5/M in · $25/M out' },
]

export function CostAnalysisSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 20 · Coût réel</span>
      <h2 className="h2">$/dev/mois — <span className="gradient-text">données réelles 2026</span>, pas marketing.</h2>
      <p className="lede">
        Source: surveys 650 enterprises mars 2026 + community reports HN/Reddit. La vérité: la baseline d'abonnement
        ne reflète pas le coût agentic réel. Routing multi-tier = save 51% vs uniform Opus.
      </p>

      <div className="grid grid-2" style={{ marginTop: 8 }}>
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3" style={{ marginBottom: 12 }}>Coût: baseline vs heavy agentic ($/dev/mois)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={TOOLS}>
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" fontSize={11} />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={11} />
              <Tooltip
                contentStyle={{ background: 'rgba(20,20,30,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12 }}
                formatter={(v: number) => `$${v}/mo`}
              />
              <Bar dataKey="baseline" name="Baseline">
                {TOOLS.map((t, i) => <Cell key={i} fill={t.color} fillOpacity={0.3} />)}
              </Bar>
              <Bar dataKey="heavy" name="Heavy agentic">
                {TOOLS.map((t, i) => <Cell key={i} fill={t.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="muted" style={{ fontSize: 11, marginTop: 8 }}>
            Heavy = utilisation agentic prolongée daily, pas chat usage occasionnel.
          </p>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3" style={{ marginBottom: 12 }}>Routing 3-tier (validé indus, save 51% vs uniform Opus)</h3>
          {ROUTING.map((r, i) => (
            <motion.div
              key={r.tier}
              style={{ marginBottom: 12 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="row" style={{ justifyContent: 'space-between', marginBottom: 4 }}>
                <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{r.tier}</div>
                <span className="muted" style={{ fontSize: 12 }}>{r.share}% · {r.cost}</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 6, height: 16, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${r.share}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + 0.1 * i }}
                  style={{ background: r.color, height: '100%' }}
                />
              </div>
            </motion.div>
          ))}
          <p className="muted" style={{ fontSize: 12, marginTop: 12, lineHeight: 1.5 }}>
            <strong>Pattern:</strong> Haiku pour navigation/classification/parallel workers · Sonnet par défaut implementation ·
            Opus orchestrateur + edge cases. Tool-selector pre-stage = bonus accuracy.
          </p>
        </motion.div>
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Self-hosting threshold</h3>
        <div className="grid grid-3" style={{ alignItems: 'center', gap: 12 }}>
          <div>
            <div className="stat"><div className="v">10M</div><div className="l">tokens/jour breakeven</div></div>
            <p className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              En dessous: API + caching wins. Au-dessus: Llama 70B / Qwen self-host devient compétitif.
            </p>
          </div>
          <div>
            <div className="stat"><div className="v">90%</div><div className="l">cache hit input cost reduction</div></div>
            <p className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              Anthropic prompt caching = $0.10/M cached vs $1/M Haiku, $0.30/M cached vs $3/M Sonnet.
            </p>
          </div>
          <div>
            <div className="stat"><div className="v">50%</div><div className="l">discount Batch API</div></div>
            <p className="muted" style={{ fontSize: 12, marginTop: 6 }}>
              Async/non-time-sensitive workloads → Batch API discount cumulable avec caching.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
