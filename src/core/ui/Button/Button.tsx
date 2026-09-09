import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { buttonStyle } from './Button.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, className, ...props }: ButtonProps) {
  const finalClass = className ? `${buttonStyle} ${className}` : buttonStyle

  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  )
}
