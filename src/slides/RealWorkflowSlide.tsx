import { motion } from 'framer-motion'

const STEPS = [
  { n: 1, title: 'Symptom', body: 'Memory leak en prod : Node process passe de 200MB → 2GB en 6h. Crash OOM toutes les nuits sur le worker queue.', color: 'clay' },
  { n: 2, title: 'Reproduce', body: 'node --inspect + Chrome DevTools → heap snapshot toutes les 30 min. Diff montre EventEmitter listeners qui grimpent linéairement.', color: 'cyan' },
  { n: 3, title: 'Trace listeners', body: 'grep "on(" + "addListener" sur tout le repo. 3 candidats. Claude isole queue.service.ts:on(\'job:done\', cb) appelé à chaque retry.', color: 'cyan' },
  { n: 4, title: 'Root cause', body: 'Listener ré-attaché à chaque retry sans removeListener. Bull queue retry x10 par job → 10 callbacks pour 1 event → 10× CPU + leak refs.', color: 'purple' },
  { n: 5, title: 'Fix', body: 'Remplace .on() par .once() + cleanup explicite dans le finally. Edit + tsc clean en 2 min. Test unit sur queue mock pour lock le comportement.', color: 'green' },
  { n: 6, title: 'Verify', body: 'Run worker 1h en local avec heap snapshot toutes les 5 min. Mémoire stable à 210MB. Listeners count = 1, pas N. Tests baseline pass.', color: 'green' },
  { n: 7, title: 'PR + deploy', body: 'gh pr create avec heap snapshot before/after en screenshot. Review merge → deploy. Monitor Datadog 24h → mémoire flat. Plus de crash OOM.', color: 'green' },
]

export function RealWorkflowSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 12 · Workflow réel</span>
      <h2 className="h2">Cas concret — <span className="gradient-text">memory leak Node, fix en 1 boucle</span>.</h2>
      <p className="lede">
        Worker prod qui crash OOM toutes les nuits. Claude Code (heap snapshot, grep, fix, test) le ferme en ~40 min vs 2 jours de debug à l'aveugle.
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
            <span className="tag green">📊 Heap diff</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              Snapshot before/after via Chrome DevTools = preuve empirique. Pas de "je crois que" — la stack te montre le coupable.
            </p>
          </div>
          <div>
            <span className="tag cyan">🔁 Boucle serrée</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              grep → edit → tsc → unit test → re-run worker. Chaque étape feedback en &lt;30s, dans la même session.
            </p>
          </div>
          <div>
            <span className="tag purple">🛡 Test pour locker</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              Avant deploy : test unit qui assert listenerCount === 1. Le bug ne reviendra plus, même si quelqu'un refacto.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-3" style={{ marginTop: 8 }}>
        <div className="glass">
          <div className="stat"><div className="v">40min</div><div className="l">Claude Code direct</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">2 jours</div><div className="l">debug manuel estimé</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">210MB</div><div className="l">stable post-fix vs 2GB</div></div>
        </div>
      </div>
    </div>
  )
}
