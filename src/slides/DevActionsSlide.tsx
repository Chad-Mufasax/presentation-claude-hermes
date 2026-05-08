import { motion } from 'framer-motion'

const CASES = [
  {
    icon: '🤖',
    name: 'PR auto-review',
    sources: 'GitHub webhook · diff · CI status',
    action: 'Read PR diff · run tsc/lint/build · comment line-by-line suggestions · 1-line verdict at end',
    example: 'PR #142: 3 type warnings · missing await on line 87 · suggest split into 2 commits',
    color: 'purple',
  },
  {
    icon: '🔥',
    name: 'Bug triage',
    sources: 'Sentry · Datadog · CloudWatch alerts',
    action: 'Find repo + line + last commit touching the file · open branch fix/<incident-id> with context',
    example: '500 on /reserves at 14h22 → reserves.service.ts:43 · last touched by commit a1b2c · branch ready',
    color: 'clay',
  },
  {
    icon: '🗃',
    name: 'Migration draft',
    sources: 'Entity diff · TypeORM CLI · staging schema',
    action: 'Generate SQL up + down migration · seed data · run on staging shadow DB · post diff',
    example: 'New field Transaction.amountVariance → migration 1715xxxx + rollback + test, ready for review',
    color: 'cyan',
  },
  {
    icon: '🪝',
    name: 'Webhook replay',
    sources: 'Sycapay · intouch · gutouch failed events',
    action: 'Replay failed webhook on staging · capture stdout + DB state · dump to /tmp + Trello evidence',
    example: 'Sycapay webhook 500 (ref: TX-984) — replayed, root cause: missing nonce, fix proposed',
    color: 'green',
  },
  {
    icon: '🌐',
    name: 'i18n / a11y scan',
    sources: 'Source code · axe-core on staging · existing locales',
    action: 'Daily cron · find hardcoded strings · run axe on Dashboard · open auto-PR with fixes',
    example: '12 hardcoded FR strings on /admin/orders · 4 a11y issues · PR ready (no merge auto)',
    color: 'cyan',
  },
]

export function DevActionsSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 22 · Dev use cases · Actions</span>
      <h2 className="h2">Hermes doesn't just <span className="gradient-text">watch</span> — it <span className="gradient-text">acts</span>.</h2>
      <p className="lede">
        Watching fills Trello boards. Acting opens PRs, triages bugs, drafts migrations, replays webhooks.
        Always the same pattern: trigger → deterministic skill → Opus reasons if needed → action.
        Humans review and merge.
      </p>

      <div className="col" style={{ gap: 10, marginTop: 8 }}>
        {CASES.map((c, i) => (
          <motion.div
            key={c.name}
            className="glass card-int"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.06 * i, duration: 0.5 }}
            style={{ padding: '12px 18px' }}
          >
            <div className="row" style={{ alignItems: 'center', gap: 16 }}>
              <div style={{ fontSize: 34, minWidth: 44, textAlign: 'center' }}>{c.icon}</div>
              <div style={{ flex: 1 }}>
                <div className="row" style={{ alignItems: 'center', gap: 12, marginBottom: 4 }}>
                  <div className="mono" style={{ fontWeight: 700, fontSize: 15 }}>{c.name}</div>
                  <span className={`tag ${c.color}`} style={{ fontSize: 10 }}>{c.sources.split('·')[0].trim()}</span>
                </div>
                <p className="muted" style={{ fontSize: 12.5, lineHeight: 1.5, margin: '4px 0' }}>
                  <strong style={{ color: 'var(--text)' }}>Action:</strong> {c.action}
                </p>
                <div style={{
                  fontSize: 11.5,
                  fontStyle: 'italic',
                  color: 'var(--text-mute)',
                  borderLeft: '2px solid rgba(255,255,255,0.18)',
                  paddingLeft: 10,
                  marginTop: 4,
                }}>
                  💡 <span style={{ color: 'var(--text)' }}>{c.example}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
