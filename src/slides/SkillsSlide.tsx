import { motion } from 'framer-motion'

const BEFORE_AFTER = [
  {
    label: 'Sans skill',
    color: 'var(--danger)',
    bg: 'rgba(220,38,38,0.06)',
    border: 'rgba(220,38,38,0.18)',
    lines: [
      'Tu ré-expliques le contexte à chaque fois.',
      'Claude analyse la situation from scratch.',
      'Tu obtiens une réponse générique.',
      'Tu corriges, tu précises, tu itères.',
    ],
  },
  {
    label: 'Avec skill',
    color: 'var(--green)',
    bg: 'rgba(22,163,74,0.06)',
    border: 'rgba(22,163,74,0.18)',
    lines: [
      'Claude reconnaît le trigger → charge le skill.',
      'Il connaît déjà le process, les règles, le ton.',
      'Il exécute directement, sans poser de questions.',
      'Tu valides. C\'est tout.',
    ],
  },
]

export function SkillsSlide() {
  return (
    <div className="col" style={{ height: '100%', justifyContent: 'center', gap: 40 }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Skills</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          Décris le process <span className="gradient-text">une fois.</span>
          <br />Claude ne l'analyse plus jamais.
        </h2>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ fontSize: 21 }}
      >
        Un skill = un fichier markdown qui décrit <strong>quand agir</strong> et <strong>comment</strong>.
        <br />Claude le charge dès que le contexte correspond — plus besoin de lui réexpliquer la logique.
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 860, margin: '0 auto', width: '100%' }}>
        {BEFORE_AFTER.map((col, ci) => (
          <motion.div
            key={col.label}
            className="glass"
            initial={{ opacity: 0, x: ci === 0 ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + ci * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 24,
              background: col.bg,
              border: `1px solid ${col.border}`,
              borderRadius: 'var(--radius)',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 15, color: col.color, marginBottom: 16 }}>{col.label}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {col.lines.map((l) => (
                <div key={l} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5 }}>
                  <span style={{ color: col.color, fontWeight: 700, flexShrink: 0 }}>{ci === 0 ? '✗' : '✓'}</span>
                  <span style={{ color: 'var(--text-dim)' }}>{l}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
