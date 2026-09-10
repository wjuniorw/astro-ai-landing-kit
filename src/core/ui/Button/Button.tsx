import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { baseButton, buttonVariants } from './Button.css'

export type ButtonProps<C extends ElementType = 'button'> = {
  as?: C
  children: ReactNode
  variant?: keyof typeof buttonVariants
  className?: string
} & ComponentPropsWithoutRef<C>

export const Button = <C extends ElementType = 'button'>({
  as,
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps<C>) => {
  const Component = as || 'button'
  const finalClass = [baseButton, buttonVariants[variant], className].filter(Boolean).join(' ')

  return (
    <Component className={finalClass} {...props}>
      {children}
    </Component>
  )
}
