import { motion } from 'framer-motion'
import { useState } from 'react'

const FILES = [
  {
    path: '~/.claude/settings.json',
    desc: 'Configuration globale — env vars + plugins activés.',
    code: `{
  "env": {
    "CLAUDE_CODE_SUBAGENT_MODEL": "sonnet",
    "MAX_THINKING_TOKENS": "32000",
    "CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING": "1",
    "DISABLE_NON_ESSENTIAL_MODEL_CALLS": "1",
    "BASH_DEFAULT_TIMEOUT_MS": "180000",
    "MCP_TIMEOUT": "30000",
    "DISABLE_TELEMETRY": "1"
  },
  "includeCoAuthoredBy": false,
  "enabledPlugins": {
    "rust-analyzer-lsp@claude-plugins-official": true,
    "swift-lsp@claude-plugins-official": true
  }
}`,
  },
  {
    path: '~/.claude/settings.local.json',
    desc: 'Allowlist personnelle — ce que tu acceptes sans demander.',
    code: `{
  "permissions": {
    "allow": [
      "Bash(gh:*)", "Bash(git:*)",
      "Bash(npm install:*)", "Bash(npm run:*)",
      "Bash(npx vercel:*)", "Bash(curl:*)",
      "WebFetch(domain:github.com)",
      "Read(//Users/chadek/**)"
    ]
  }
}`,
  },
  {
    path: '<projet>/.claude/settings.local.json',
    desc: 'Permissions scopées au projet (commitable ou non).',
    code: `{
  "permissions": {
    "allow": [
      "Bash(prisma migrate:*)",
      "Bash(supabase:*)",
      "WebFetch(domain:vercel.com)"
    ]
  }
}`,
  },
  {
    path: 'CLAUDE.md (memory)',
    desc: 'Lu à chaque session — règles, conventions, archi.',
    code: `# Conventions

- Stack : Next.js 15 (app router), Prisma, Neon.
- TS strict, pas de \`any\`, pas de \`enum\`.
- Migrations : \`prisma migrate dev\` jamais en prod, prod = \`migrate deploy\`.
- Tests : Vitest + Playwright. CI Vercel preview.

# Trucs à ne PAS faire

- Ne pas lancer \`prisma db push\` (déstructive).
- Ne pas commit \`prisma/migrations/\` sans review.
- Ne JAMAIS toucher à l'auth sans /security-review.`,
  },
]

export function SettingsSlide() {
  const [tab, setTab] = useState(0)
  const f = FILES[tab]
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 06 · Settings & permissions</span>
      <h2 className="h2">Quatre fichiers, et tu transformes Claude en <span className="gradient-text">collègue qui te connaît</span>.</h2>

      <div className="pills">
        {FILES.map((f, i) => (
          <span key={i}
            className={`pill click ${i === tab ? 'active' : ''}`}
            onClick={() => setTab(i)}>
            {f.path}
          </span>
        ))}
      </div>

      <motion.div className="glass" key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="mono" style={{ fontSize: 16, fontWeight: 700 }}>{f.path}</div>
          <span className="tag clay">tab {tab + 1}/{FILES.length}</span>
        </div>
        <p className="muted" style={{ fontSize: 14, marginBottom: 10 }}>{f.desc}</p>
        <pre className="code" style={{ margin: 0, maxHeight: 320 }}>{f.code}</pre>
      </motion.div>

      <div className="grid grid-3">
        <div className="glass">
          <div className="stat"><div className="v">~40</div><div className="l">permissions whitelistées</div></div>
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            Skill <span className="mono">fewer-permission-prompts</span> les détecte depuis tes transcripts.
          </p>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">0</div><div className="l">prompts inutiles par session</div></div>
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            Plus la liste est précise, moins tu interromps le flow. Reste strict sur ce qui touche au prod.
          </p>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">3</div><div className="l">scopes cumulés</div></div>
          <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>
            user · project tracked · project local. Le plus restrictif gagne — les 3 s’additionnent en allow.
          </p>
        </div>
      </div>
    </div>
  )
}
