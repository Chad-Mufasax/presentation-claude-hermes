import { motion } from 'framer-motion'

export function SkillsAnatomySlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 40 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Skills · Anatomie</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Un fichier markdown.<br />
          <span className="gradient-text">C'est tout ce qu'il faut.</span>
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 21 }}
      >
        Tu décris le trigger et la procédure une fois dans{' '}
        <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>
          ~/.claude/skills/&lt;nom&gt;/SKILL.md
        </span>.
        <br />Claude s'en charge dès que la situation correspond.
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
<span className="key">description</span>: <span className="str">Review une PR. TRIGGER si le user dit "review",{'\n'}{'  '}"regarde la PR", ou ouvre un lien github.com/pulls.</span>{'\n'}
<span className="key">---</span>{'\n'}
{'\n'}
<span className="com"># Procédure</span>{'\n'}
{'1. '}git diff main...HEAD <span className="com">→ liste les fichiers touchés</span>{'\n'}
{'2. '}Pour chaque fichier : check OWASP top 10 + couverture test{'\n'}
{'3. '}Sortie : table <span className="str">{'{ severity · fichier · finding · fix suggéré }'}</span>
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
          <strong style={{ color: 'var(--indigo)' }}>Clé :</strong>{' '}
          la section <span className="mono">description</span> dit à Claude <em>quand</em> charger le skill — pas besoin de le taper.
          <br />
          <span className="muted" style={{ fontSize: 13 }}>
            Il détecte le contexte et s'active seul.
          </span>
        </p>
      </motion.div>
    </div>
  )
}
