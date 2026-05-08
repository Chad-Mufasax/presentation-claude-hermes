import { motion } from 'framer-motion'

const STEPS = [
  { n: 1, title: 'Symptom', body: 'Memory leak in prod: Node process climbs from 200MB → 2GB in 6h. Worker queue crashes OOM every night.', color: 'clay' },
  { n: 2, title: 'Reproduce', body: 'node --inspect + Chrome DevTools → heap snapshot every 30 min. Diff shows EventEmitter listeners climbing linearly.', color: 'cyan' },
  { n: 3, title: 'Trace listeners', body: 'grep "on(" + "addListener" across the repo. 3 candidates. Claude isolates queue.service.ts:on(\'job:done\', cb) re-attached on every retry.', color: 'cyan' },
  { n: 4, title: 'Root cause', body: 'Listener re-attached on every retry without removeListener. Bull queue retries x10 per job → 10 callbacks per event → 10× CPU + leaked refs.', color: 'purple' },
  { n: 5, title: 'Fix', body: 'Replace .on() with .once() + explicit cleanup in finally. Edit + tsc clean in 2 min. Unit test on queue mock to lock the behavior.', color: 'green' },
  { n: 6, title: 'Verify', body: 'Run worker 1h locally with heap snapshot every 5 min. Memory steady at 210MB. Listener count = 1, not N. Baseline tests pass.', color: 'green' },
  { n: 7, title: 'PR + deploy', body: 'gh pr create with before/after heap snapshots. Reviewer merges → deploy. Monitor Datadog 24h → memory flat. No more OOM crashes.', color: 'green' },
]

export function RealWorkflowSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 12 · Real workflow</span>
      <h2 className="h2">Real case — <span className="gradient-text">Node memory leak, fixed in one loop</span>.</h2>
      <p className="lede">
        Prod worker crashes OOM every night. Claude Code (heap snapshot, grep, fix, test) closes it in ~40 min vs 2 days of blind debugging.
        Here are the 7 steps — all in a single interactive session.
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
        <h3 className="h3" style={{ marginBottom: 10 }}>What worked</h3>
        <div className="grid grid-3">
          <div>
            <span className="tag green">📊 Heap diff</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              Before/after snapshot via Chrome DevTools = empirical proof. No "I think" — the stack shows the culprit.
            </p>
          </div>
          <div>
            <span className="tag cyan">🔁 Tight loop</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              grep → edit → tsc → unit test → re-run worker. Each step gives feedback in &lt;30s, all in the same session.
            </p>
          </div>
          <div>
            <span className="tag purple">🛡 Lock with a test</span>
            <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
              Before deploy: unit test asserting listenerCount === 1. Bug won't come back, even if someone refactors.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-3" style={{ marginTop: 8 }}>
        <div className="glass">
          <div className="stat"><div className="v">40min</div><div className="l">Claude Code direct</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">2 days</div><div className="l">manual debug estimate</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">210MB</div><div className="l">stable post-fix vs 2GB</div></div>
        </div>
      </div>
    </div>
  )
}
