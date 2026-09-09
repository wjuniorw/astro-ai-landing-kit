import type { ReactNode } from 'react'

import { alignVariants, baseHeading, colorVariants, sizeVariants, weightVariants } from './Heading.css'

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
  size?: keyof typeof sizeVariants
  weight?: keyof typeof weightVariants
  align?: keyof typeof alignVariants
  color?: keyof typeof colorVariants
  className?: string
}

export function Heading({
  align = 'left',
  as: Component = 'h2',
  children,
  className,
  color = 'text',
  size, // If not provided, it falls back to the tag name
  weight = 'bold',
  ...props
}: HeadingProps) {
  
  const finalSize = size || Component
  
  const classes = [
    baseHeading,
    sizeVariants[finalSize],
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
