import { motion } from 'framer-motion'
import { useState } from 'react'

const COMMANDS = [
  {
    name: '/mx-status',
    desc: 'Quick status MufasaX — repos dirty, recent PRs, staging health, kanban actif. Read-only.',
    color: 'cyan',
    duration: '~10s',
    spec: `Sections (max 3 lignes chacune):
1. Repos dirty (git status across MufasaX-*)
2. Recent PRs (gh pr list, last 24h)
3. Staging health (SSH ec2, docker ps + log errors count)
4. Kanban active (hermes kanban list --tenant mufasax)
5. Open incidents (state/mufasax.json)

Final: 🟢/🟠/🔴 + 1-line urgent action.`,
  },
  {
    name: '/mx-fix <intent>',
    desc: 'Cycle complet code→test→build→smoke→commit→push→PR→deploy verify. Pour "fix X in Y".',
    color: 'green',
    duration: '~10-25min',
    spec: `Phase 1 — Classify (read CLAUDE.md repo)
Phase 2 — Branch fix/<slug> from staging (NEVER develop/main)
Phase 3 — Verify mandatory:
  - npx tsc --noEmit
  - npm run build
  - npm test
  - NestJS boot smoke (timeout 25 node dist/src/main.js)
Phase 4 — Conventional commit + gh pr create --base staging
Phase 5 — Post-merge: SSH staging, curl endpoint, report`,
  },
  {
    name: '/mx-verify',
    desc: 'SSH staging EC2 + check container health + endpoints. Pour valider qu\'un deploy marche.',
    color: 'purple',
    duration: '~30s',
    spec: `Steps:
1. SSH 52.47.61.45:22222 → docker ps + docker logs <svc> --tail 30
2. Critical env vars (INTERNAL_API_SECRET, BACKEND_API_URL)
3. Direct backend test (curl localhost:3004 with secret)
4. Public URL tests (test-console, test-api)
5. Report 🟢/🟠/🔴 par service + concrete next-action

Read-only. Strip secrets in output.`,
  },
  {
    name: '/mx-snapshot [label]',
    desc: 'Backup Hermes state + git stash all dirty MufasaX repos AVANT risky operation.',
    color: 'clay',
    duration: '~30s',
    spec: `Steps:
1. hermes backup --output ~/.hermes-backup-snapshot-<ts>.zip
2. git stash push -u -m "snapshot-<ts>-<label>" pour chaque repo dirty
3. SSH EC2 → docker ps state dump dans /tmp/snapshot-*
4. Output: paths zip + repos stashed + EC2 snap files + git SHAs

Restore via hermes import + git stash pop. Quand utiliser:
- Avant docker compose --force-recreate staging
- Avant merge PR chain multi-repo
- Avant infra change destructive`,
  },
]

export function MySlashCommandsSlide() {
  const [tab, setTab] = useState(0)
  const c = COMMANDS[tab]
  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 08 · Mes slash commands</span>
      <h2 className="h2">4 commandes custom — <span className="gradient-text">workflows MufasaX en 1 ligne</span>.</h2>
      <p className="lede">
        Stockés dans <span className="mono">~/.claude/commands/*.md</span>. Disponibles dans toute session Claude Code,
        autocomplete avec <span className="mono">/</span>. Chacun = recette répétitive automatisée.
      </p>

      <div className="grid grid-4" style={{ marginTop: 8 }}>
        {COMMANDS.map((cmd, i) => (
          <motion.div
            key={cmd.name}
            className={`glass card-int ${i === tab ? 'active' : ''}`}
            onClick={() => setTab(i)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i }}
            style={{
              cursor: 'pointer',
              border: i === tab ? '1px solid rgba(255,255,255,0.2)' : undefined,
            }}
          >
            <div className="mono" style={{ fontWeight: 700, fontSize: 14 }}>{cmd.name}</div>
            <span className={`tag ${cmd.color}`} style={{ fontSize: 11, marginTop: 4 }}>{cmd.duration}</span>
            <p className="muted" style={{ fontSize: 12, marginTop: 8, lineHeight: 1.4 }}>{cmd.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div className="glass" key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
        <div className="row" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="mono" style={{ fontSize: 16, fontWeight: 700 }}>{c.name}</div>
          <span className={`tag ${c.color}`}>{c.duration}</span>
        </div>
        <pre className="code" style={{ margin: 0, maxHeight: 280, fontSize: 13 }}>{c.spec}</pre>
      </motion.div>

      <div className="grid grid-3" style={{ marginTop: 8 }}>
        <div className="glass">
          <div className="stat"><div className="v">4</div><div className="l">commands custom</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">5min</div><div className="l">à écrire chaque</div></div>
        </div>
        <div className="glass">
          <div className="stat"><div className="v">∞</div><div className="l">réutilisations</div></div>
        </div>
      </div>
    </div>
  )
}
