import { motion } from 'framer-motion'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts'

const COST_DATA = [
  { name: 'Tout en Opus', cost: 100, color: '#f87171' },
  { name: 'Subagent = Sonnet', cost: 38, color: '#fbbf24' },
  { name: '+ Cache hit',         cost: 19, color: '#34d399' },
  { name: '+ Skills + tasks',     cost: 12, color: '#38bdf8' },
]

export function TokenOptiSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 07 · Coûts & tokens</span>
      <h2 className="h2">Diviser ta facture par ~8 sans perdre en qualité.</h2>

      <div className="grid grid-2">
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Le levier principal : le cache</h3>
          <p className="muted" style={{ fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>
            Le system prompt + tes <span className="mono">CLAUDE.md</span> + les fichiers réutilisés sont mis en cache pour 5&nbsp;min.
            Coût d’écriture cache ≈ +25 % la 1<sup>re</sup> fois, lecture ≈ <strong>10×</strong> moins cher après.
          </p>
          <ul className="bullets cyan" style={{ marginTop: 12 }}>
            <li>Garde tes prompts <strong>stables en début</strong> (cache préfixé) — change la fin.</li>
            <li>Active <span className="mono">extended cache (1h)</span> sur les sessions longues.</li>
            <li>Re-Read le même fichier coûte ~rien.</li>
          </ul>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Mes 5 leviers, par ordre d’impact</h3>
          <ul className="bullets" style={{ marginTop: 8 }}>
            <li><strong>Subagent en Sonnet</strong> · 90 % des cas, 5× moins cher.</li>
            <li><strong>Cache 5 min/1h</strong> · turn 2+ devient quasi-gratuit.</li>
            <li><strong>Subagent pour le bruit</strong> · logs, transcripts → résumé court.</li>
            <li><strong>Plan mode</strong> avant l’implémentation · évite les retours arrière.</li>
            <li><strong>Tasks</strong> · tu sais où il en est, pas besoin de re-prompter.</li>
          </ul>
        </motion.div>
      </div>

      <motion.div className="glass" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <h3 className="h3">Coût relatif d’une session « refacto » (base 100)</h3>
        <div style={{ height: 220, marginTop: 14 }}>
          <ResponsiveContainer>
            <BarChart data={COST_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 50, bottom: 0 }}>
              <XAxis type="number" stroke="#7a7468" fontSize={12} />
              <YAxis type="category" dataKey="name" stroke="#b8b0a4" fontSize={13} width={170} />
              <Tooltip
                contentStyle={{ background: '#14111f', border: '1px solid #2a2438', borderRadius: 8, color: '#efe9e1' }}
                formatter={(v: number) => [`${v} %`, 'Coût']}
              />
              <Bar dataKey="cost" radius={[0, 6, 6, 0]}>
                {COST_DATA.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="muted mono" style={{ fontSize: 11, marginTop: 6 }}>
          Mesures internes — refacto type sur ~30 fichiers, 4 heures de session.
        </p>
      </motion.div>
    </div>
  )
}
