import type { AnimationControls, Target, TargetAndTransition, Transition, VariantLabels } from 'framer-motion'

export type FlexContainerProps = {
    flexDirection?: string
    justifyContent?: string
    alignItems?: string
    flexWrap?: string
    gap?: string
    backgroundColor?: string
    width?: string
    height?: string
    maxWidth?: string
    maxHeight?: string
    paddingTop?: string
    paddingBottom?: string
    paddingLeft?: string
    paddingRight?: string
    color?: string
    backgroundImage?: string
    initial?: boolean | Target | VariantLabels
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean
    transition?: Transition
}

export const ExcludeFramerMotionProps = [
    'backgroundImage',
    'flexDirection',
    'justifyContent',
    'alignItems',
    'flexWrap',
    'gap',
    'backgroundColor',
    'width',
    'height',
    'maxWidth',
    'maxHeight',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'color',
]
