import { motion } from 'framer-motion'
import type { SlideCtx } from '../slides'

const PARTS = [
  { num: 1, title: 'Comprendre', desc: 'Claude Code en 1 slide', range: '03', color: 'clay' },
  { num: 2, title: '10 tips concrets', desc: 'À appliquer dès cette semaine', range: '04-13', color: 'purple' },
  { num: 3, title: 'Aller plus loin', desc: 'Hermes : Claude qui ne dort jamais', range: '15-19', color: 'green' },
]

export function TocSlide({ jump }: SlideCtx) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36, height: '100%', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow"><span className="dot" /> Plan</span>
        <h2 className="h2" style={{ marginTop: 16 }}>
          3 temps. <span className="gradient-text">30 minutes.</span>
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {PARTS.map((p, i) => (
          <motion.div
            key={p.num}
            className="glass card-int"
            onClick={() => jump(i === 0 ? 2 : i === 1 ? 3 : 15)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 * i + 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              cursor: 'pointer',
            }}
            whileHover={{ x: 8 }}
          >
            <motion.div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 64,
                fontWeight: 700,
                lineHeight: 1,
                background: 'var(--grad-warm)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                minWidth: 60,
              }}
              animate={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            >
              {p.num}
            </motion.div>
            <div style={{ flex: 1 }}>
              <h3 className="h3" style={{ marginBottom: 6 }}>{p.title}</h3>
              <p className="muted" style={{ fontSize: 16, margin: 0 }}>{p.desc}</p>
            </div>
            <span className={`tag ${p.color}`} style={{ fontSize: 12 }}>slides {p.range}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="muted mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ fontSize: 13, textAlign: 'center', letterSpacing: '.1em' }}
      >
        clic sur un bloc pour sauter · → pour avancer slide par slide
      </motion.p>
    </div>
  )
}
