import { motion } from 'framer-motion'

const AGENTS = [
  { name: 'Explore',         model: 'haiku',  use: 'Localiser du code en lecture seule (find / grep).',                         color: 'cyan'   },
  { name: 'Plan',             model: 'opus',   use: 'Designer une stratégie d’implémentation, identifier les fichiers.',         color: 'clay'   },
  { name: 'general-purpose',  model: 'sonnet', use: 'Recherche multi-étape, tâches ouvertes.',                                   color: 'purple' },
  { name: 'claude-code-guide',model: 'sonnet', use: 'Q/R sur Claude Code, SDK, MCP — sans polluer le contexte principal.',       color: 'green'  },
]

export function SubagentsSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 04 · Subagents</span>
      <h2 className="h2">Paralléliser et <span className="gradient-text">protéger ton contexte</span> principal.</h2>
      <p className="lede">
        Un subagent reçoit une mission isolée, fait son boulot avec son propre buffer de contexte,
        renvoie un résumé. Le modèle parent reste compact — moins de tokens, plus de focus.
      </p>

      <div className="grid grid-2" style={{ marginTop: 8 }}>
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Quand spawn un subagent</h3>
          <ul className="bullets cyan" style={{ marginTop: 12 }}>
            <li>Une <strong>recherche &gt; 3 requêtes</strong> dans le repo → <span className="mono">Explore</span>.</li>
            <li>Une <strong>review indépendante</strong> (second avis) → instance fraîche, pas mon contexte.</li>
            <li>Plusieurs <strong>tâches indépendantes</strong> → un agent par tâche, en parallèle (1 message, N tool calls).</li>
            <li>Une <strong>recherche bruyante</strong> (logs, transcripts, dumps) → l’agent filtre et résume.</li>
          </ul>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Quand t’en passer</h3>
          <ul className="bullets" style={{ marginTop: 12 }}>
            <li>Tu <strong>connais déjà le fichier</strong> à toucher → <span className="mono">Read</span> direct.</li>
            <li>Une seule <span className="mono">grep</span> suffit → pas la peine de spawn.</li>
            <li>L’agent dupliquerait du boulot que tu fais déjà.</li>
            <li>Brief trop court → l’agent n’a pas le contexte pour bien faire.</li>
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-4">
        {AGENTS.map((a, i) => (
          <motion.div
            key={a.name}
            className="glass card-int"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
          >
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="mono" style={{ fontWeight: 700 }}>{a.name}</div>
              <span className={`tag ${a.color}`}>{a.model}</span>
            </div>
            <p className="muted" style={{ fontSize: 13, marginTop: 8, lineHeight: 1.5 }}>{a.use}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Astuce de prod : modèle subagent en Sonnet</h3>
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div className="code">
<span className="com"># ~/.claude/settings.json</span>{'\n'}
<span className="key">"env"</span>: {'{'}{'\n'}
{'  '}<span className="key">"CLAUDE_CODE_SUBAGENT_MODEL"</span>: <span className="str">"sonnet"</span>,{'\n'}
{'  '}<span className="key">"MAX_THINKING_TOKENS"</span>: <span className="str">"32000"</span>{'\n'}
{'}'}
          </div>
          <p className="muted" style={{ fontSize: 14, lineHeight: 1.6 }}>
            Le subagent travaille sur une tâche bornée — Sonnet 4.6 fait 90 % du job
            pour ~5× moins cher qu’Opus. Garde Opus pour le modèle parent qui orchestre.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
