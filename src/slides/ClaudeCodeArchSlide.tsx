import { motion } from 'framer-motion'

export function ClaudeCodeArchSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 02 · Le harness Claude Code</span>
      <h2 className="h2">Le modèle est <span className="gradient-text">l’ampoule</span>. Le harness est <span className="gradient-text">tout le reste</span>.</h2>
      <p className="lede">
        Claude Code est un CLI Node qui boucle &nbsp;<span className="mono">prompt → tool calls → résultats → prompt</span>.
        L’intelligence vient autant de la qualité du prompt système que du modèle.
      </p>

      <div className="grid grid-2" style={{ marginTop: 8 }}>
        <motion.div className="glass" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="h3">Boucle d’exécution</h3>
          <div className="flow" style={{ marginTop: 14 }}>
            <div className="step">
              <div className="node glow-clay">
                <div className="t">1 · Prompt</div>
                <div className="v">User + system + memory</div>
              </div>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="node glow-purple">
                <div className="t">2 · Modèle</div>
                <div className="v">Pense + appelle un tool</div>
              </div>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <div className="node glow-cyan">
                <div className="t">3 · Harness</div>
                <div className="v">Exécute (Read/Bash/...)</div>
              </div>
            </div>
            <div className="arrow">↺</div>
          </div>
          <p className="muted" style={{ marginTop: 12, fontSize: 13 }}>
            Tant qu’il choisit un tool, on reboucle. Sinon, le texte final remonte à l’écran.
          </p>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
          <h3 className="h3">Ce qu’il sait de toi</h3>
          <ul className="bullets purple" style={{ marginTop: 12 }}>
            <li><strong>cwd</strong> · le dossier d’où tu lances <span className="mono">claude</span>.</li>
            <li><strong>git</strong> · branche, status, diff disponibles.</li>
            <li><strong>CLAUDE.md</strong> · ton fichier mémoire, lu à chaque session.</li>
            <li><strong>~/.claude/settings.json</strong> · env vars, permissions, plugins.</li>
            <li><strong>Skills</strong> · disponibles globalement ou par projet.</li>
            <li><strong>Hooks</strong> · scripts shell exécutés à des events précis.</li>
          </ul>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2 }}>
        <div className="term">
          <div className="bar"><span /><span /><span /><span className="label">~/DEV — claude</span></div>
          <div className="body">
<span className="prompt">$</span> claude
<span className="out">  ✱ welcome to claude code · model: claude-opus-4-7 · context: 1M</span>
<span className="out">  ✱ workspace: /Users/chadek/DEV  ·  git: main (clean)</span>
<span className="out">  ✱ memory loaded from ~/.claude/CLAUDE.md  ·  skills: 14</span>

<span className="prompt">›</span> refactor le module auth pour utiliser argon2id au lieu de bcrypt
<span className="out">  ⏺ Plan(3 étapes)  ⏺ Read(src/auth/*)  ⏺ Edit(...)  ⏺ Bash(npm test)</span>
<span className="ok">  ✓ tests passent · 4 fichiers modifiés · 1 dépendance ajoutée</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
