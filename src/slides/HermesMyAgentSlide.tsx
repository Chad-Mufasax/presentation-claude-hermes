import { motion } from 'framer-motion'

export function HermesMyAgentSlide() {
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 12 · Mon setup</span>
      <h2 className="h2">Un agent principal sur <span className="gradient-text">Haiku 4.5</span> qui délègue à <span className="gradient-text">Opus 4.7</span> au cas par cas.</h2>

      <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
        <motion.div className="glass" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Pourquoi cette répartition</h3>
          <ul className="bullets" style={{ marginTop: 12 }}>
            <li><strong>90 % du trafic</strong> : routing, classification, réponses courtes — Haiku 4.5 fait ça à 1$/Mtok in.</li>
            <li><strong>10 % critique</strong> : review code, audit sécu, synthèse de 30 cartes — délégué à Opus via le skill.</li>
            <li><strong>Coût stable</strong> : ~3 $/jour de tout, contre ~25 $/jour si je laissais Opus tout faire.</li>
            <li><strong>Latence</strong> : Haiku répond en 1–2 s sur WhatsApp, Opus prend 10–40 s mais c’est ok pour les vraies tâches.</li>
          </ul>
        </motion.div>

        <motion.div className="glass" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="h3">Triggers du skill <span className="mono">opus-consultation</span></h3>
          <div className="col" style={{ marginTop: 10 }}>
            <div className="row"><span className="tag clay">forcé</span><span className="muted" style={{ fontSize: 13 }}>Message commence par <span className="mono">opus:</span>, <span className="mono">classifie:</span>, <span className="mono">review:</span></span></div>
            <div className="row"><span className="tag clay">forcé</span><span className="muted" style={{ fontSize: 13 }}>Code en backticks + question sécu</span></div>
            <div className="row"><span className="tag clay">forcé</span><span className="muted" style={{ fontSize: 13 }}>Demande explicite de CVSS / severity</span></div>
            <div className="row"><span className="tag warn">souple</span><span className="muted" style={{ fontSize: 13 }}>Synthèse de &gt; 4 items</span></div>
            <div className="row"><span className="tag green">jamais</span><span className="muted" style={{ fontSize: 13 }}>Question textbook que Haiku connaît déjà</span></div>
          </div>
        </motion.div>
      </div>

      <motion.div className="glass" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <h3 className="h3" style={{ marginBottom: 10 }}>Extrait de mon SOUL.md</h3>
        <pre className="code" style={{ margin: 0, fontSize: 12, lineHeight: 1.6 }}>{`# Hermes Agent Persona

You are Chad's main WhatsApp Hermes agent on Claude Haiku 4.5.
You orchestrate tools and route hard reasoning to Opus 4.7
via the \`terminal\` tool.

## Tools disponibles (limités volontairement)

- terminal       — shell commands (skills-v2, curl, git)
- file / read    — lecture / écriture
- memory         — save/load durable facts
- clarify        — demander précision si question ambigue
- cronjob        — manipuler crons
- todo           — tracking interne

Pas de send_message, pas de delegate_task, pas de web,
pas de vision. Si tu essaies, ça foire — tu perds du temps.

## ABSOLUTE RULE — Opus via skill opus-consultation

Tu délègues à Opus 4.7 dans CES CAS uniquement :
1. Message commence par \`opus:\` / \`classifie:\` / \`review:\`
2. Code en backticks + question sécu
3. Demande explicite de CVSS, severity, criticality
4. Synthèse de > 3-4 items`}</pre>
      </motion.div>
    </div>
  )
}
