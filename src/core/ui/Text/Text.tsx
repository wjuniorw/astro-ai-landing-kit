import type { ElementType, ReactNode } from 'react'

import { alignVariants, baseText, colorVariants, sizeVariants, weightVariants } from './Text.css'

export interface TextProps {
  as?: ElementType
  children: ReactNode
  size?: keyof typeof sizeVariants
  weight?: keyof typeof weightVariants
  align?: keyof typeof alignVariants
  color?: keyof typeof colorVariants
  className?: string
}

export function Text({
  align = 'left',
  as: Component = 'p',
  children,
  className,
  color = 'text',
  size = 'base',
  weight = 'normal',
  ...props
}: TextProps) {
  const classes = [
    baseText,
    sizeVariants[size],
    weightVariants[weight],
    alignVariants[align],
    colorVariants[color],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
