import { motion } from 'framer-motion'

export function SkillsAnatomySlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 40 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Skills · Anatomy</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          One markdown file.<br />
          <span className="gradient-text">That's all it takes.</span>
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 21 }}
      >
        Describe the trigger and the procedure once in{' '}
        <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>
          ~/.claude/skills/&lt;name&gt;/SKILL.md
        </span>.
        <br />Claude handles it whenever the situation matches.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: 860, margin: '0 auto', width: '100%' }}
      >
        <div className="code" style={{ fontSize: 14, lineHeight: 1.8 }}>
<span className="key">---</span>{'\n'}
<span className="key">name</span>: review-pr{'\n'}
<span className="key">description</span>: <span className="str">Review a PR. TRIGGER when the user says "review",{'\n'}{'  '}"look at the PR", or opens a github.com/pulls link.</span>{'\n'}
<span className="key">---</span>{'\n'}
{'\n'}
<span className="com"># Procedure</span>{'\n'}
{'1. '}git diff main...HEAD <span className="com">→ list touched files</span>{'\n'}
{'2. '}For each file: check OWASP top 10 + test coverage{'\n'}
{'3. '}Output: table <span className="str">{'{ severity · file · finding · suggested fix }'}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="glass"
        style={{
          padding: 20,
          maxWidth: 860,
          margin: '0 auto',
          width: '100%',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.07), rgba(234,88,12,0.04))',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 16, margin: 0, lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--indigo)' }}>Key:</strong>{' '}
          the <span className="mono">description</span> field tells Claude <em>when</em> to load the skill — no need to type it.
          <br />
          <span className="muted" style={{ fontSize: 13 }}>
            It detects the context and activates itself.
          </span>
        </p>
      </motion.div>
    </div>
  )
}
