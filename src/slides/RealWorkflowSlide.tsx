import { motion } from 'framer-motion'

const STEPS = [
  { n: 1, title: 'Symptom', body: 'test-console.mufasax.com → 502 Bad Gateway sur /api/reserves. UI montre "Failed to load reserves".', color: 'clay' },
  { n: 2, title: 'SSH staging', body: 'ssh ec2 → docker ps → backend container Up, dashboard-frontend Up. Logs backend → "Reserve fetch failed for intouch: connect ETIMEDOUT".', color: 'cyan' },
  { n: 3, title: 'Race condition trace', body: 'curl localhost:3000/reserves direct → 200 mais en 135 secondes. Promise.allSettled attend TCP timeout naturel sur Intouch.', color: 'cyan' },
  { n: 4, title: 'Root cause', body: 'reserves.service.ts: pas de timeout par provider. Si un provider unreachable → response hang 135s → nginx 30s timeout → 502.', color: 'purple' },
  { n: 5, title: 'Fix /mx-fix', body: 'Spawn Opus via mgr-feat: Promise.race([call, timeout(5000)]). Multi-repo plan détecté: BackEnd + Dashboard-FE. Cross-repo kanban auto-créé.', color: 'green' },
  { n: 6, title: 'Verify', body: 'tsc clean, build clean, NestJS boot smoke OK (apprend du PayDunya 2026-05-03), tests baseline préservés.', color: 'green' },
  { n: 7, title: 'PR + deploy', body: 'gh pr create --base staging (script-enforced). Chad merge → CI deploy auto. SSH check → /reserves répond en 5s max désormais.', color: 'green' },
]

export function RealWorkflowSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 12 · Workflow réel</span>
      <h2 className="h2">Cas concret — <span className="gradient-text">fix d'un 502 staging en 1 boucle</span>.</h2>
      <p className="lede">
        Le 5 mai 2026. Bug remonté, Claude Code (SSH, edit, test, deploy verify) le ferme en ~30 min vs 3h via le bot Telegram qui se perdait.
        Voici les 7 étapes — toutes dans une seule session interactive.
      </p>

      <div className="col" style={{ gap: 8, marginTop: 8 }}>
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            className="glass card-int"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06 * i }}
            style={{ padding: '10px 16px' }}
          >
            <div className="row" style={{ alignItems: 'center', gap: 12 }}>
              <span className={`tag ${s.color}`} style={{ minWidth: 28, textAlign: 'center', fontWeight: 700 }}>{s.n}</span>
              <div className="mono" style={{ fontWeight: 700, fontSize: 14, minWidth: 160 }}>{s.title}</div>
              <p className="muted" style={{ fontSize: 13, margin: 0, flex: 1, lineHeight: 1.5 }}>{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Ce qui a fonctionné</h3>
        <div className="grid grid-3">
          <div>
            <span className="tag green">📡 SSH natif</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              Bash tool dans Claude Code = SSH ec2 direct. Pas d'agent gateway, pas d'async. 1 prompt = SSH + diagnose.
            </p>
          </div>
          <div>
            <span className="tag cyan">🔁 Boucle serrée</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              Edit → tsc → build → smoke → SSH verify. Chaque étape dans la même session, feedback instantané.
            </p>
          </div>
          <div>
            <span className="tag purple">🛡 Autopsy enforced</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              CLAUDE.md "NestJS boot smoke" rule = ajoutée APRÈS PayDunya. Chaque incident → règle. Chaque règle → permanent.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-3" style={{ marginTop: 8 }}>
        <div className="glass">
          <div className="stat"><div className="v">30min</div><div className="l">Claude Code direct</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">3h</div><div className="l">via bot Telegram async</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">10×</div><div className="l">faster avec bon outil</div></div>
        </div>
      </div>
    </div>
  )
}
