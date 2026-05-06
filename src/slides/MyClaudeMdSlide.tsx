import { motion } from 'framer-motion'

const SECTIONS = [
  { n: '01', title: 'Pre-Work',           one: 'Delete avant build · Phased exec · Plan ≠ Build · Spec-driven',  emoji: '🧹' },
  { n: '02', title: 'Understanding Intent',one: 'Follow refs not desc · Raw data · "go" = execute, no recap',     emoji: '👁' },
  { n: '03', title: 'Code Quality',        one: 'Senior standards · Forced verification · NestJS boot smoke',     emoji: '⚡' },
  { n: '04', title: 'Security',            one: 'Security-first review · Secrets hygiene · Dep awareness',         emoji: '🔒' },
  { n: '05', title: 'Context Management',  one: 'Sub-agent swarms · Decay aware · Proactive /compact',             emoji: '🧠' },
  { n: '06', title: 'Edit Safety',         one: 'Re-read before/after · Search before rename · One source truth',  emoji: '✏️' },
  { n: '07', title: 'Self-Improvement',    one: 'Bug autopsy · Failure recovery · Fresh eyes pass',                emoji: '🔁' },
  { n: '08', title: 'Housekeeping',        one: 'Autonomous fix · No unsolicited docs · Proactive guardrails',     emoji: '🧰' },
]

export function MyClaudeMdSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 28 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> 06 · Mon CLAUDE.md</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          230 lignes. <span className="gradient-text">8 sections.</span><br />
          La mémoire long-terme de mon agent.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Lu à chaque session. Devient un contrat de comportement.
        Chaque règle est née d'une <strong style={{ color: 'var(--accent)' }}>vraie douleur</strong> (l'incident PayDunya, les fix-and-forget, les context decays).
      </motion.p>

      <div className="grid grid-4" style={{ gap: 14 }}>
        {SECTIONS.map((s, i) => (
          <motion.div
            key={s.n}
            className="glass card-int"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ padding: 18 }}
          >
            <motion.div
              style={{ fontSize: 32, marginBottom: 8 }}
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
            >
              {s.emoji}
            </motion.div>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-mute)', marginBottom: 4, letterSpacing: '.1em' }}>{s.n}</div>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</div>
            <p className="muted" style={{ fontSize: 12, lineHeight: 1.5, margin: 0 }}>{s.one}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="glass"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        style={{
          background: 'linear-gradient(135deg, rgba(234,88,12,0.08), rgba(99,102,241,0.06))',
          padding: 22,
        }}
      >
        <p className="muted" style={{ fontSize: 15, lineHeight: 1.5, margin: 0 }}>
          💡 <strong>Loi cardinale:</strong> <em>"gather context → take action → verify work → repeat"</em>.
          Tout le reste découle de ça.
        </p>
      </motion.div>
    </div>
  )
}
