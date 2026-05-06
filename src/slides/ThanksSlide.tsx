import { motion } from 'framer-motion'
import type { SlideCtx } from '../slides'

export function ThanksSlide({ jump }: SlideCtx) {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 36, alignItems: 'center', textAlign: 'center' }}>
      <div className="title-flair">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="title"
          style={{ fontSize: 'clamp(80px, 12vw, 160px)' }}
        >
          <span className="gradient-text">Merci.</span>
        </motion.h1>
      </motion.div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ fontSize: 'clamp(20px, 2vw, 28px)', maxWidth: '50ch' }}
      >
        Questions sur Claude Code, Hermes, MCP, subagents, ou architecture — on peut creuser n'importe quel sujet.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{ display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>Contact</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>chade.elkurdi@enjoy-automation.com</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>Docs Claude</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>docs.claude.com</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--text-mute)' }}>Hermes</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>github/NousResearch/hermes-agent</div>
        </div>
      </motion.div>

      <motion.button
        onClick={() => jump(0)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          background: 'var(--surface)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
          padding: '12px 24px',
          borderRadius: 999,
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 500,
          boxShadow: 'var(--shadow-sm)',
          marginTop: 8,
        }}
      >
        ⏮ Retour au début
      </motion.button>
    </div>
  )
}
