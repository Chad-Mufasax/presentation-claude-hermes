import { motion } from 'framer-motion'

const ARCHI = [
  {
    label: 'Hermes',
    sub: 'Linux · claude CLI installed · holds .pem key',
    os: '🐧 Linux',
    osColor: 'green',
    link: 'SSH staging.mufasax.com (-i staging.pem)',
  },
  {
    label: 'Staging EC2',
    sub: 'Ubuntu 22.04 · docker compose · 9 microservices',
    os: '🐧 Linux',
    osColor: 'green',
    link: 'docker logs / docker exec on the right container',
  },
  {
    label: 'mufasax-backend container',
    sub: 'NestJS · structured JSON logs to stdout',
    os: '🐳 Docker',
    osColor: 'cyan',
    link: null,
  },
]

const SKILL_CODE = `ssh -i ~/.ssh/mufasax-staging.pem \\
    ubuntu@staging.mufasax.com -- "
  docker logs --since 2h --tail 5000 mufasax-backend 2>&1 \\
    | grep -E 'userNumber.{0,3}492|userId.{0,3}492' \\
    | tail -100 \\
    | jq -R 'fromjson? // .'
"`

const COMMANDS = [
  { cmd: 'mx: user <id> tx',     desc: 'Last 20 transactions of the user (status, amount, provider)' },
  { cmd: 'mx: user <id> logs',   desc: 'Backend logs mentioning the user, last 2h, parsed' },
  { cmd: 'mx: user <id> wallet', desc: 'Current wallet state (mobile money + crypto reserves)' },
  { cmd: 'mx: user <id> diag',   desc: 'Full diagnostic — Opus synthesizes + proposes action' },
]

export function RemoteDiagSlide() {
  return (
    <div className="col" style={{ height: '100%', gap: 14 }}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <span className="eyebrow"><span className="dot" /> 22 · Remote diagnostic</span>
        <h2 className="h2" style={{ marginTop: 8 }}>
          <span className="gradient-text">"User 492 didn't receive his transaction"</span> — find out why in 30s.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        style={{
          background: 'linear-gradient(90deg, rgba(120,180,255,0.08), rgba(180,120,255,0.08))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 10,
          padding: '14px 18px',
        }}
      >
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--accent)', fontSize: 16 }}>Hermes has no eyes, just a terminal.</strong><br />
          Support pings: a user complains. Instead of asking dev to SSH staging, grep logs, find the
          provider that 502'd — Hermes does it itself in 30s. <strong>SSH + docker logs</strong>,
          structured JSON in, hypothesis out. Audit-trailed, reproducible.
        </p>
      </motion.div>

      <div className="grid grid-2" style={{ gap: 18, alignItems: 'start' }}>
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <h3 className="h3" style={{ marginBottom: 10, fontSize: 13 }}>① The architecture — SSH then docker</h3>
          <div className="col" style={{ gap: 0 }}>
            {ARCHI.map((s, i) => (
              <div key={s.label}>
                <motion.div
                  className="glass"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + 0.2 * i }}
                  style={{ padding: '10px 14px' }}
                >
                  <div className="row" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div className="mono" style={{ fontWeight: 700, fontSize: 13 }}>{s.label}</div>
                      <div className="muted" style={{ fontSize: 11, marginTop: 2 }}>{s.sub}</div>
                    </div>
                    <span className={`tag ${s.osColor}`} style={{ fontSize: 11, whiteSpace: 'nowrap' }}>{s.os}</span>
                  </div>
                </motion.div>
                {s.link && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + 0.2 * i }}
                    style={{
                      paddingLeft: 18,
                      borderLeft: '2px dashed rgba(255,255,255,0.2)',
                      marginLeft: 18,
                      paddingTop: 6,
                      paddingBottom: 6,
                      fontSize: 11,
                      color: 'var(--text-mute)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    ↓ {s.link}
                  </motion.div>
                )}
              </div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              style={{
                paddingLeft: 18,
                borderLeft: '2px dashed rgba(120,255,180,0.4)',
                marginLeft: 18,
                paddingTop: 8,
                fontSize: 11,
                color: 'rgb(120,220,160)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              ↑ JSON logs come back through the same tunnel
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="h3" style={{ marginBottom: 10, fontSize: 13 }}>② The command Hermes runs</h3>
          <pre className="code" style={{ fontSize: 10.5, lineHeight: 1.55, margin: 0, padding: 12 }}>
{SKILL_CODE}
          </pre>
          <p className="muted" style={{ fontSize: 11, marginTop: 8, lineHeight: 1.5 }}>
            <strong style={{ color: 'var(--text)' }}>~5 lines of shell.</strong> SSH into staging EC2,
            <code style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 5px', borderRadius: 4 }}>docker logs</code> on
            the backend container, grep the userNumber, parse JSON with
            <code style={{ background: 'rgba(255,255,255,0.06)', padding: '1px 5px', borderRadius: 4 }}>jq</code>. Opus synthesizes.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-2" style={{ gap: 18, alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            background: 'linear-gradient(180deg, rgba(40,60,80,0.4), rgba(20,30,50,0.5))',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
            padding: 12,
          }}
        >
          <h3 className="h3" style={{ marginBottom: 10, fontSize: 13 }}>③ On Telegram — the UX</h3>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
            style={{
              background: 'rgba(70,130,200,0.25)',
              border: '1px solid rgba(120,180,255,0.3)',
              borderRadius: 10,
              padding: '8px 12px',
              marginBottom: 6,
              marginLeft: '20%',
              fontSize: 11.5,
              fontFamily: 'var(--font-mono)',
            }}
          >
            mx: user 492 transaction missing
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.9 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 10,
              padding: '10px 12px',
              marginRight: '8%',
              fontSize: 11,
              lineHeight: 1.55,
            }}
          >
            🔍 <strong>User 492</strong> (+221 78 480 26 96) — 2h log scan<br /><br />
            🔴 1 transaction failed at 14:32 — <code>TX-3847</code> · 5,000 XOF<br />
            🔴 Sycapay callback → <code>502 Service Unavailable</code><br />
            ⚠ No retry (queue maxAttempts=1)<br />
            ⚠ User wallet debited but not credited<br /><br />
            <em>Hypothesis: Sycapay was down 14:30-14:35, transaction lost.</em><br />
            Action: refund TX-3847 + bump maxAttempts to 3.<br />
            Reply <code>go</code> to refund.
          </motion.div>
        </motion.div>

        <motion.div
          className="glass"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          style={{ padding: 14 }}
        >
          <h3 className="h3" style={{ marginBottom: 10, fontSize: 13 }}>④ How to use it</h3>
          <div className="col" style={{ gap: 6 }}>
            {COMMANDS.map((c, i) => (
              <motion.div
                key={c.cmd}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + 0.08 * i }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '4px 0',
                }}
              >
                <code style={{
                  background: 'rgba(120,180,255,0.15)',
                  color: 'var(--accent)',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 11.5,
                  minWidth: 200,
                  fontFamily: 'var(--font-mono)',
                }}>{c.cmd}</code>
                <span className="muted" style={{ fontSize: 11.5 }}>{c.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4 }}
        style={{
          background: 'linear-gradient(90deg, rgba(120,180,255,0.06), rgba(180,120,255,0.06), rgba(120,255,180,0.06))',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 10,
          padding: '12px 16px',
        }}
      >
        <h3 className="h3" style={{ marginBottom: 10, fontSize: 13 }}>
          ⑤ How Opus structures its reply — always 3 blocks
        </h3>
        <div className="grid grid-3" style={{ gap: 12 }}>
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }}>
            <span className="tag cyan" style={{ fontSize: 11 }}>① Description</span>
            <p className="muted" style={{ fontSize: 11.5, lineHeight: 1.5, marginTop: 6 }}>
              The <strong style={{ color: 'var(--text)' }}>raw facts</strong> pulled from logs.
              No interpretation. Just numbers, error codes, timestamps.
              <br /><em style={{ color: 'rgba(120,180,255,0.85)' }}>"TX-3847 failed at 14:32, Sycapay 502, no retry"</em>
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7 }}>
            <span className="tag purple" style={{ fontSize: 11 }}>② Hypothesis</span>
            <p className="muted" style={{ fontSize: 11.5, lineHeight: 1.5, marginTop: 6 }}>
              Opus <strong style={{ color: 'var(--text)' }}>connects the facts</strong> and proposes the
              likely cause. Stays explicit about uncertainty.
              <br /><em style={{ color: 'rgba(180,140,255,0.85)' }}>"Sycapay was down 14:30-14:35, no retry → user funds lost"</em>
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}>
            <span className="tag green" style={{ fontSize: 11 }}>③ Call-to-action</span>
            <p className="muted" style={{ fontSize: 11.5, lineHeight: 1.5, marginTop: 6 }}>
              Proposed action + command to confirm.
              <br /><em style={{ color: 'rgba(140,220,160,0.85)' }}>"Refund TX-3847 + bump maxAttempts. Reply 'go'."</em>
              <br /><span style={{ fontSize: 10.5, fontStyle: 'italic', color: 'var(--text-mute)' }}>
                Later: a fixer agent takes over if no human is online. First tested with human validation.
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
