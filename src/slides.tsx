import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { TitleSlide } from './slides/TitleSlide'
import { TocSlide } from './slides/TocSlide'
import { ClaudePowerSlide } from './slides/ClaudePowerSlide'
import { Tip01ParallelSlide } from './slides/Tip01ParallelSlide'
import { Tip02PlanSlide } from './slides/Tip02PlanSlide'
import { Tip03ClaudeMdSlide } from './slides/Tip03ClaudeMdSlide'
import { Tip04BiggerModelSlide } from './slides/Tip04BiggerModelSlide'
import { Tip05VerifySlide } from './slides/Tip05VerifySlide'
import { ContextSlide } from './slides/ContextSlide'
import { SkillsSlide } from './slides/SkillsSlide'
import { SkillsAnatomySlide } from './slides/SkillsAnatomySlide'
import { Tip06CommandsSlide } from './slides/Tip06CommandsSlide'
import { Tip07ConnectSlide } from './slides/Tip07ConnectSlide'
import { Tip08PhrasesSlide } from './slides/Tip08PhrasesSlide'
import { Tip09VoiceSlide } from './slides/Tip09VoiceSlide'
import { Tip10MobileSlide } from './slides/Tip10MobileSlide'
import { ApplyThisWeekSlide } from './slides/ApplyThisWeekSlide'
import { RealWorkflowSlide } from './slides/RealWorkflowSlide'
import { TransitionSlide } from './slides/TransitionSlide'
import { HermesIntroSlide } from './slides/HermesIntroSlide'
import { EnjoyUseCaseSlide } from './slides/EnjoyUseCaseSlide'
import { EnjoyUseCase2Slide } from './slides/EnjoyUseCase2Slide'
import { RemoteDiagSlide } from './slides/RemoteDiagSlide'
import { HermesShimSlide } from './slides/HermesShimSlide'
import { TakeawaysSlide } from './slides/TakeawaysSlide'
import { ThanksSlide } from './slides/ThanksSlide'

export type SlideCtx = {
  go: (delta: number) => void
  jump: (i: number) => void
  idx: number
  total: number
}

export type Slide = {
  title: string
  render: (ctx: SlideCtx) => ReactNode
}

export const slides: Slide[] = [
  { title: 'Optimiser Claude Code',                render: (c) => <TitleSlide {...c} /> },
  { title: 'Plan',                                  render: (c) => <TocSlide {...c} /> },
  { title: 'Claude tout nu vs équipé',              render: () => <ClaudePowerSlide /> },
  { title: 'Tip 01 · Parallèle',                    render: () => <Tip01ParallelSlide /> },
  { title: 'Tip 02 · Plan avant',                   render: () => <Tip02PlanSlide /> },
  { title: 'Tip 03 · CLAUDE.md',                    render: () => <Tip03ClaudeMdSlide /> },
  { title: 'Tip 04 · Le plus gros modèle',          render: () => <Tip04BiggerModelSlide /> },
  { title: 'Tip 05 · Vérifier',                     render: () => <Tip05VerifySlide /> },
  { title: 'Contexte',                               render: () => <ContextSlide /> },
  { title: 'Skills',                                 render: () => <SkillsSlide /> },
  { title: 'Skills · Anatomie',                      render: () => <SkillsAnatomySlide /> },
  { title: 'Tip 06 · Commandes',                    render: () => <Tip06CommandsSlide /> },
  { title: 'Tip 07 · Connecter',                    render: () => <Tip07ConnectSlide /> },
  { title: 'Tip 08 · Phrases magiques',             render: () => <Tip08PhrasesSlide /> },
  { title: 'Tip 09 · Voix',                         render: () => <Tip09VoiceSlide /> },
  { title: 'Tip 10 · Mobile',                       render: () => <Tip10MobileSlide /> },
  { title: 'À appliquer cette semaine',             render: () => <ApplyThisWeekSlide /> },
  { title: 'Workflow réel',                         render: () => <RealWorkflowSlide /> },
  { title: 'Au-delà du CLI →',                      render: () => <TransitionSlide /> },
  { title: 'Hermes',                                render: () => <HermesIntroSlide /> },
  { title: 'Cas d\'usage Enjoy · Veille',           render: () => <EnjoyUseCaseSlide /> },
  { title: 'Cas d\'usage Enjoy · Actions',          render: () => <EnjoyUseCase2Slide /> },
  { title: 'Diagnostic à distance',                 render: () => <RemoteDiagSlide /> },
  { title: 'Hermes ↔ sub Max (shim)',               render: () => <HermesShimSlide /> },
  { title: 'À retenir',                             render: () => <TakeawaysSlide /> },
  { title: 'Merci',                                 render: (c) => <ThanksSlide {...c} /> },
]

export { motion }
