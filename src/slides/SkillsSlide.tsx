import { motion } from 'framer-motion'

const SKILLS = [
  { name: '/init',                  desc: 'Génère un CLAUDE.md à partir du repo — exécuté à chaque clone.', cat: 'core' },
  { name: '/review',                desc: 'Review d’une PR · check tests, sécu, cohérence.',                cat: 'core' },
  { name: '/security-review',       desc: 'Audit sécu des changements pending sur la branche.',             cat: 'core' },
  { name: 'simplify',               desc: 'Relit ce qui vient d’être écrit · fix réutilisation, qualité.',  cat: 'meta' },
  { name: 'fewer-permission-prompts', desc: 'Scanne tes transcripts et propose une allowlist de Bash.',     cat: 'meta' },
  { name: 'update-config',          desc: 'Modifie settings.json · permissions · hooks · env.',             cat: 'meta' },
  { name: 'claude-api',             desc: 'Aide à coder avec le SDK Anthropic, prompt caching inclus.',     cat: 'dev'  },
  { name: 'loop',                   desc: 'Rejoue une tâche toutes les N min (ex: babysit PRs).',           cat: 'dev'  },
  { name: 'opus-consultation',      desc: '[Hermes] délègue à Opus 4.7 sous classify / review / synth.',     cat: 'mine' },
]

const CAT_COLOR: Record<string, string> = { core: 'clay', meta: 'purple', dev: 'cyan', mine: 'green' }
const CAT_LABEL: Record<string, string> = { core: 'Built-in', meta: 'Méta', dev: 'Dev', mine: 'Custom (à moi)' }

export function SkillsSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 05 · Skills</span>
      <h2 className="h2">Tes <span className="gradient-text">slash commands</span> — packagés, versionnés, partageables.</h2>
      <p className="lede">
        Un skill = un dossier <span className="mono">~/.claude/skills/&lt;nom&gt;/</span> avec un <span className="mono">SKILL.md</span> qui décrit
        quand l’invoquer et comment. Claude le détecte tout seul via les triggers, ou tu le tapes en <span className="mono">/skill-name</span>.
      </p>

      <div className="grid grid-3">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 * i }}
          >
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="mono" style={{ fontWeight: 700 }}>{s.name}</div>
              <span className={`tag ${CAT_COLOR[s.cat]}`}>{CAT_LABEL[s.cat]}</span>
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Anatomie d’un skill custom</h3>
        <div className="code">
<span className="com"># ~/.claude/skills/security-review/SKILL.md</span>{'\n'}
<span className="key">---</span>{'\n'}
<span className="key">name</span>: security-review{'\n'}
<span className="key">description</span>: Audit sécu des changements pending. TRIGGER si{'\n'}
{'  '}le user dit "review sécu", "audit sécu", ou si la branche{'\n'}
{'  '}touche à de l'auth/crypto/SQL.{'\n'}
<span className="key">---</span>{'\n'}{'\n'}
<span className="com"># Procédure</span>{'\n'}
1. <span className="fn">git diff main...HEAD</span>{'\n'}
2. Pour chaque fichier touché : check OWASP top 10.{'\n'}
3. Spawn un subagent Explore pour trouver les call-sites.{'\n'}
4. Sortie : table markdown <span className="str">{'{ severity, file, line, finding, fix }'}</span>.
        </div>
      </motion.div>
    </div>
  )
}
