import { motion } from 'framer-motion'

const RING = [
  { icon: '🧠', label: 'CLAUDE.md', d: 'Mémoire projet permanente' },
  { icon: '🛠', label: 'Tools', d: 'Read · Edit · Bash · Grep · Web' },
  { icon: '🎯', label: 'Skills', d: 'Procédures réutilisables' },
  { icon: '🪝', label: 'Hooks', d: 'Automation pré/post tool' },
  { icon: '🔌', label: 'MCP', d: 'Notion · GitHub · Drive · custom' },
  { icon: '📋', label: 'Plan mode', d: 'Dry-run avant exécution' },
  { icon: '🤖', label: 'Subagents', d: 'Parallélisation isolée' },
  { icon: '⚡', label: 'Slash cmds', d: 'Raccourci vers une skill' },
]

const POSITIONS = [
  { row: 1, col: 1 }, // CLAUDE.md
  { row: 1, col: 2 }, // Tools
  { row: 1, col: 3 }, // Skills
  { row: 2, col: 1 }, // Hooks
  { row: 2, col: 3 }, // MCP
  { row: 3, col: 1 }, // Plan mode
  { row: 3, col: 2 }, // Subagents
  { row: 3, col: 3 }, // Slash cmds
]

export function ClaudePowerSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 24 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Avant les tips</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Claude <span style={{ textDecoration: 'line-through', color: 'var(--text-mute)', fontWeight: 600 }}>tout nu</span> vs <span className="gradient-text">Claude équipé</span>.
        </h2>
        <p className="lede" style={{ marginTop: 12 }}>
          Si tu copies/colles depuis le chat web, tu touches ~10% du potentiel. Voici tout ce qu'il y a derrière Claude Code.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'center', flex: 1 }}>
        {/* LEFT — Claude brut */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass" style={{ padding: 22, filter: 'grayscale(0.6)' }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: 14, textAlign: 'center' }}>
              ⛔ Mode brut · claude.ai
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="mono" style={{ padding: '8px 12px', background: 'var(--surface-2)', borderRadius: 6, fontSize: 12, color: 'var(--text-dim)' }}>
                → "Comment je fix ce bug ?"
              </div>
              <div style={{ textAlign: 'center', color: 'var(--text-mute)', fontSize: 14 }}>↓</div>
              <div className="mono" style={{ padding: '8px 12px', background: 'var(--surface-2)', borderRadius: 6, fontSize: 12, color: 'var(--text-dim)' }}>
                ← "Voici un snippet…"
              </div>
              <div style={{ textAlign: 'center', color: 'var(--text-mute)', fontSize: 14 }}>↓</div>
              <div className="mono" style={{ padding: '8px 12px', background: 'var(--surface-2)', borderRadius: 6, fontSize: 12, color: 'var(--text-mute)', fontStyle: 'italic' }}>
                copier · coller · re-prompter
              </div>
            </div>
            <div style={{ marginTop: 18, fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
              <div>✗ Pas de mémoire entre sessions</div>
              <div>✗ Pas d'accès au repo</div>
              <div>✗ Pas d'outils (read · edit · bash)</div>
              <div>✗ Pas de boucle (test → fix → verify)</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Claude équipé (hub & spoke) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: 12,
            position: 'relative',
            minHeight: 360,
          }}
        >
          {RING.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + 0.07 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass card-int"
              style={{
                gridRow: POSITIONS[i].row,
                gridColumn: POSITIONS[i].col,
                padding: '14px 12px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: 22 }}>{r.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--accent)' }}>{r.label}</div>
              <div className="muted" style={{ fontSize: 11, lineHeight: 1.35 }}>{r.d}</div>
            </motion.div>
          ))}

          {/* CENTER — Claude pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              gridRow: 2,
              gridColumn: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <motion.div
              animate={{ boxShadow: [
                '0 0 0 0 rgba(234, 88, 12, 0.0)',
                '0 0 0 22px rgba(234, 88, 12, 0.10)',
                '0 0 0 0 rgba(234, 88, 12, 0)',
              ] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              style={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: 'var(--grad-hero)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: 18,
                letterSpacing: '.05em',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              CLAUDE
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ textAlign: 'center', fontSize: 14, color: 'var(--text-dim)' }}
      >
        💡 Tout ça est <strong>activable depuis le terminal</strong>. Pas besoin d'API, pas de plombage. Juste <span className="mono" style={{ background: 'var(--surface-2)', padding: '2px 8px', borderRadius: 6 }}>claude</span>.
      </motion.div>
    </div>
  )
}
