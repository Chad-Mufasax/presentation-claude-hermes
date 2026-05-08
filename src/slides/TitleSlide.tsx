import { motion } from 'framer-motion'
import type { SlideCtx } from '../slides'

export function TitleSlide({ jump }: SlideCtx) {
  return (
    <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32 }}>
      <div className="title-flair">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <motion.div
        className="eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .1, duration: .5 }}
      >
        <span className="dot" /> Internal talk · May 2026
      </motion.div>

      <div>
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25, duration: .7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <span className="gradient-text">Claude Code</span>
        </motion.h1>
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4, duration: .7, ease: [0.2, 0.7, 0.2, 1] }}
        >
          from novice to orchestrator
        </motion.h1>
      </div>

      <motion.p
        className="lede"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .7, duration: .5 }}
      >
        The patterns, hooks, MCP servers and real workflows I use daily.
        Plus an intro to <strong style={{ color: 'var(--accent)' }}>Hermes</strong> — the orchestrator that pushes Claude Code beyond the terminal.
      </motion.p>

      <motion.div
        className="row"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .9, duration: .5 }}
      >
        <span className="tag clay">Claude Code</span>
        <span className="tag purple">MCP · Subagents · Hooks</span>
        <span className="tag green">Hermes · Multi-agents</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: .5 }}
        style={{ marginTop: 16, display: 'flex', gap: 14, alignItems: 'center' }}
      >
        <motion.button
          onClick={() => jump(1)}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          style={{
            background: 'var(--grad-warm)',
            color: 'white',
            border: 0,
            padding: '16px 28px',
            borderRadius: 999,
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: 15,
            letterSpacing: '.01em',
            boxShadow: '0 12px 32px rgba(234, 88, 12, 0.3)',
          }}
        >
          Start →
        </motion.button>
        <span className="muted mono" style={{ fontSize: 12 }}>
          or press <span style={{ border: '1px solid var(--border)', padding: '2px 8px', borderRadius: 6, background: 'var(--surface)' }}>→</span>
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: 'absolute', right: 0, bottom: 0, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mute)', letterSpacing: '.08em' }}
      >
        26 SLIDES · ~35 MIN · CHAD · MUFASAX
      </motion.div>
    </div>
  )
}
