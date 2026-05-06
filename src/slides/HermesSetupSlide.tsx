import { motion } from 'framer-motion'
import { useState } from 'react'

const STEPS = [
  {
    n: '01',
    t: 'Installer le binaire',
    code: `# avec pipx (recommandé)
pipx install hermes-cli

# vérifier
hermes --version
hermes status`,
    note: 'Crée ~/.hermes/ avec config par défaut. Le daemon « gateway » tourne en background.',
  },
  {
    n: '02',
    t: 'Configurer un provider',
    code: `# ~/.hermes/config.yaml
model:
  default: claude-haiku-4-5
  provider: anthropic
  base_url: https://api.anthropic.com
  context_length: 200000

agent:
  max_turns: 60
  reasoning_effort: medium`,
    note: 'Tu peux ajouter NousResearch (Hermes 4), Together, OpenRouter — c’est juste base_url + key.',
  },
  {
    n: '03',
    t: 'Définir le SOUL de l’agent',
    code: `# ~/.hermes/SOUL.md
# Persona

Tu es l'assistant principal de Chad sur WhatsApp.
Tu es factuel, concis, dégun-bullshit.

# Tools autorisés
- terminal · file · memory · clarify · cronjob · todo

# Règle absolue
Délègue à Opus via le skill opus-consultation pour
review code / classification sécu / synthèse longue.`,
    note: 'Le SOUL est le system prompt principal. Garde-le court — il consomme du cache à chaque turn.',
  },
  {
    n: '04',
    t: 'Brancher un canal',
    code: `# pairing WhatsApp via QR code
hermes pair whatsapp

# ou Telegram via bot token
hermes pair telegram --token $TG_BOT_TOKEN

# tester
hermes channels list
hermes send whatsapp +33XXX "ping"`,
    note: 'Hermes garde la session WhatsApp Web ouverte en local. Pas de SaaS, tout reste sur ta machine.',
  },
  {
    n: '05',
    t: 'Schedule un cron',
    code: `# ~/.hermes/cron/jobs.json
{
  "jobs": [
    {
      "id": "morning-brief",
      "name": "Briefing matinal 7h",
      "schedule": "0 7 * * *",
      "agent": "main",
      "prompt": "Résume mes mails non lus, mes PRs, mes alertes.",
      "deliver": "whatsapp:+33612345678"
    }
  ]
}`,
    note: 'Le scheduler interne lit ce fichier, exécute, push le résultat sur le canal demandé.',
  },
]

export function HermesSetupSlide() {
  const [step, setStep] = useState(0)
  const s = STEPS[step]
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 13 · Setup en 5 étapes</span>
      <h2 className="h2">De zéro à un agent qui te ping le matin sur WhatsApp.</h2>

      <div className="row" style={{ gap: 8 }}>
        {STEPS.map((st, i) => (
          <span key={i}
            className={`pill click ${i === step ? 'active' : ''}`}
            onClick={() => setStep(i)}>
            {st.n} · {st.t}
          </span>
        ))}
      </div>

      <motion.div
        className="glass"
        key={step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .35 }}
      >
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 14 }}>
          <div className="row">
            <div className="mono gradient-text" style={{ fontSize: 32, fontWeight: 700 }}>{s.n}</div>
            <h3 className="h3" style={{ marginLeft: 10 }}>{s.t}</h3>
          </div>
          <span className="tag clay">{step + 1} / {STEPS.length}</span>
        </div>

        <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
          <pre className="code" style={{ margin: 0, fontSize: 13, lineHeight: 1.6 }}>{s.code}</pre>
          <div>
            <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', color: 'var(--accent-5)', marginBottom: 8 }}>
              ↳ Note
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text)' }}>{s.note}</p>
          </div>
        </div>
      </motion.div>

      <div className="row" style={{ gap: 8 }}>
        <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}
          style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', padding: '8px 14px', borderRadius: 999, cursor: 'pointer', fontSize: 13 }}>
          ← Étape précédente
        </button>
        <button onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))} disabled={step === STEPS.length - 1}
          style={{ background: 'var(--grad-clay)', color: '#1c1410', border: 0, padding: '8px 14px', borderRadius: 999, cursor: 'pointer', fontSize: 13, fontWeight: 700 }}>
          Étape suivante →
        </button>
      </div>
    </div>
  )
}
