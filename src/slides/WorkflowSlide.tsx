import { motion } from 'framer-motion'

const STEPS = [
  { n: '01', t: 'Cadrer',         d: 'Décris l’outcome, pas la méthode. « Refacto auth pour argon2id, sans casser les sessions actives. »',  tip: 'Pas de code dans la 1re question.' },
  { n: '02', t: 'Plan mode',      d: 'Shift+Tab → il te propose un plan, tu valides. Discussion sans risque.',                                tip: 'Plan = devis. Tu peux dire non.' },
  { n: '03', t: 'TaskCreate',     d: 'Une todo par étape. Il sait où il en est, toi aussi.',                                                  tip: 'Tu peux interrompre, il reprend.' },
  { n: '04', t: 'Subagents',      d: 'Recherche, exploration, review : délégué. Le parent reste compact.',                                    tip: 'En parallèle quand indépendants.' },
  { n: '05', t: 'Review serrée',  d: 'Tu lis le diff, tu poses 2 questions précises. /security-review en finition.',                          tip: 'Trust mais verify.' },
  { n: '06', t: 'Capitaliser',    d: 'Promote ce qui marche en skill ou hook. La prochaine session démarre plus vite.',                       tip: 'CLAUDE.md = ta dette pédagogique.' },
]

export function WorkflowSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 09 · Workflow</span>
      <h2 className="h2">Mon flow standard, en <span className="gradient-text">6 étapes</span>.</h2>
      <p className="lede">
        Pas de magie : c’est juste un protocole. Une fois rodé, tu codes 2 à 4× plus vite avec moins de bugs.
      </p>

      <div className="grid grid-3">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            className="glass card-int"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <div className="row" style={{ marginBottom: 10, alignItems: 'baseline' }}>
              <div className="mono gradient-text" style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-.02em' }}>{s.n}</div>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{s.t}</div>
            </div>
            <p className="muted" style={{ fontSize: 14, lineHeight: 1.55 }}>{s.d}</p>
            <hr className="hr" />
            <div className="mono" style={{ fontSize: 11, color: 'var(--accent-5)' }}>↳ {s.tip}</div>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>
        <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div className="stat"><div className="v">×3</div><div className="l">vélocité ressentie</div></div>
          <div className="stat"><div className="v">−65 %</div><div className="l">prompts inutiles</div></div>
          <div className="stat"><div className="v">×2</div><div className="l">% PRs first-pass</div></div>
          <div className="stat"><div className="v">−40 %</div><div className="l">tokens / feature</div></div>
        </div>
      </motion.div>
    </div>
  )
}
