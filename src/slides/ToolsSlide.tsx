import { motion } from 'framer-motion'
import { useState } from 'react'

const TOOLS = [
  { cat: 'Files',   name: 'Read',         desc: 'Lecture (texte, image, PDF, notebook).',                      tag: 'clay'   },
  { cat: 'Files',   name: 'Edit',         desc: 'Remplacement exact de chaînes — diff envoyé, pas le fichier.', tag: 'clay'   },
  { cat: 'Files',   name: 'Write',        desc: 'Création / réécriture complète — préférer Edit.',             tag: 'clay'   },
  { cat: 'Shell',   name: 'Bash',         desc: 'Commandes shell, support background, timeouts.',              tag: 'purple' },
  { cat: 'Shell',   name: 'Grep / Glob',  desc: 'Recherche rapide en mode read-only.',                         tag: 'purple' },
  { cat: 'Web',     name: 'WebFetch',     desc: 'Récupérer une page · 15 min cache.',                          tag: 'cyan'   },
  { cat: 'Web',     name: 'WebSearch',    desc: 'Recherche web indexée.',                                      tag: 'cyan'   },
  { cat: 'Agents',  name: 'Agent',        desc: 'Lancer un sous-agent (général, Explore, Plan...).',           tag: 'green'  },
  { cat: 'Agents',  name: 'Skill',        desc: 'Invoquer un slash command (`/init`, `/review`...).',          tag: 'green'  },
  { cat: 'Tasks',   name: 'TaskCreate',   desc: 'Créer une todo trackée dans la session.',                     tag: 'warn'   },
  { cat: 'Tasks',   name: 'TaskUpdate',   desc: 'Marquer in_progress / completed.',                            tag: 'warn'   },
  { cat: 'MCP',     name: 'mcp__*',       desc: 'Outils branchés via Model Context Protocol (Neon, Notion...).', tag: 'danger' },
]

const CATS = ['Tous', 'Files', 'Shell', 'Web', 'Agents', 'Tasks', 'MCP'] as const

export function ToolsSlide() {
  const [cat, setCat] = useState<typeof CATS[number]>('Tous')
  const filtered = cat === 'Tous' ? TOOLS : TOOLS.filter(t => t.cat === cat)

  return (
    <div className="col" style={{ height: '100%' }}>
      <span className="eyebrow"><span className="dot" /> 03 · La toolbox</span>
      <h2 className="h2">Une dizaine d’outils — assemblés en plans, c’est ce qui produit le résultat.</h2>
      <p className="lede">
        Le modèle ne « code » pas tout seul : il sélectionne un outil, le harness l’exécute, lui rend le résultat.
        Comprendre ces outils, c’est comprendre où il va être bon ou en galère.
      </p>

      <div className="pills">
        {CATS.map(c => (
          <span key={c}
            className={`pill click ${c === cat ? 'active' : ''}`}
            onClick={() => setCat(c)}>
            {c}
          </span>
        ))}
      </div>

      <div className="grid grid-3" style={{ marginTop: 4 }}>
        {filtered.map((t, i) => (
          <motion.div
            key={t.name}
            className="glass card-int"
            layout
            initial={{ opacity: 0, scale: .96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
          >
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div className="mono" style={{ fontWeight: 700, fontSize: 16 }}>{t.name}</div>
              <span className={`tag ${t.tag}`}>{t.cat}</span>
            </div>
            <div className="muted" style={{ marginTop: 8, fontSize: 14, lineHeight: 1.5 }}>{t.desc}</div>
          </motion.div>
        ))}
      </div>

      <div className="muted mono" style={{ fontSize: 12, marginTop: 'auto' }}>
        Astuce · clique une catégorie pour filtrer. La plupart de mes sessions touchent &lt; 6 outils.
      </div>
    </div>
  )
}
