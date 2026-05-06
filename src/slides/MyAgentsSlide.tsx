import { motion } from 'framer-motion'

export function MyAgentsSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 07 · Custom subagents</span>
      <h2 className="h2"><span className="gradient-text">Agent dédié = isolation</span> + parallélisme + persona.</h2>
      <p className="lede">
        Stockés dans <span className="mono">~/.claude/agents/*.md</span>. Modèle, tools, persona scopés.
        Spawnés via Agent tool ou par commande slash. Tournent en parallèle, retournent un résumé compact.
      </p>

      <div className="grid grid-2" style={{ marginTop: 8 }}>
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: 8 }}>
            <h3 className="h3" style={{ margin: 0 }}>mufasax-verifier</h3>
            <span className="tag green">read-only</span>
          </div>
          <p className="muted" style={{ fontSize: 13, marginBottom: 10 }}>
            Vérifie un deploy MufasaX sur staging EC2. Spawn parallèle après merge.
            Tools restreints (Bash, Read, Grep). Strip secrets en output.
          </p>
          <pre className="code" style={{ fontSize: 12, maxHeight: 240, margin: 0 }}>{`---
name: mufasax-verifier
description: Verifies a MufasaX
  deploy on staging EC2.
  Read-only — never modifies prod.
tools: Bash, Read, Grep
---

SSH details:
  KEY=...Staging.pem
  HOST=ubuntu@52.47.61.45
  PORT=22222

Verification checklist:
1. Container alive (docker ps)
2. Image age (recent if redeploy)
3. Logs sanity (errors/warns)
4. Env critical vars
5. Direct endpoint test
6. Public endpoint test
7. Cross-service flow

Output: 🟢/🟠/🔴 par service`}</pre>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Pourquoi subagent vs slash command ?</h3>
          <ul className="bullets cyan" style={{ marginTop: 12 }}>
            <li><strong>Slash command</strong> = recipe linéaire dans MA session principale.</li>
            <li><strong>Subagent</strong> = nouvelle session isolée, propre tools, propre contexte. Retour résumé.</li>
            <li>Spawne <strong>plusieurs en parallèle</strong> (1 message, N agents) — review/test/deploy en même temps.</li>
            <li>Protège le contexte parent — l'agent voit logs + dumps, parent voit juste verdict.</li>
          </ul>

          <h3 className="h3" style={{ marginTop: 16 }}>Builtin Claude Code subagents</h3>
          <div className="grid grid-2" style={{ gap: 8 }}>
            <div className="glass" style={{ padding: 8, background: 'rgba(255,255,255,0.03)' }}>
              <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>Explore</div>
              <p className="muted" style={{ fontSize: 11, margin: '4px 0 0' }}>Lecture only — find/grep code</p>
            </div>
            <div className="glass" style={{ padding: 8, background: 'rgba(255,255,255,0.03)' }}>
              <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>Plan</div>
              <p className="muted" style={{ fontSize: 11, margin: '4px 0 0' }}>Architecte plan d'impl</p>
            </div>
            <div className="glass" style={{ padding: 8, background: 'rgba(255,255,255,0.03)' }}>
              <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>general-purpose</div>
              <p className="muted" style={{ fontSize: 11, margin: '4px 0 0' }}>Recherche multi-step</p>
            </div>
            <div className="glass" style={{ padding: 8, background: 'rgba(255,255,255,0.03)' }}>
              <div className="mono" style={{ fontSize: 13, fontWeight: 700 }}>claude-code-guide</div>
              <p className="muted" style={{ fontSize: 11, margin: '4px 0 0' }}>Q/R Claude Code/SDK</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div className="glass" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Pattern: review parallèle d'une grosse PR</h3>
        <div className="code" style={{ fontSize: 13, maxHeight: 120 }}>
{`# 1 message → 4 agents en parallèle, chacun review une dimension
Agent({ subagent_type: 'general-purpose', prompt: 'Review PR #184 pour security issues' })
Agent({ subagent_type: 'general-purpose', prompt: 'Review PR #184 pour test coverage' })
Agent({ subagent_type: 'general-purpose', prompt: 'Review PR #184 pour perf' })
Agent({ subagent_type: 'mufasax-verifier', prompt: 'Verify staging deploy after merge' })

# 4 résumés courts → décision merge en 30s, pas 30 min de review séquentielle`}
        </div>
      </motion.div>
    </div>
  )
}
