import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { baseButton, buttonVariants } from './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: keyof typeof buttonVariants
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  const finalClass = [baseButton, buttonVariants[variant], className].filter(Boolean).join(' ')

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
