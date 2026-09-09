import type { HTMLAttributes } from 'react'

import { section } from './Section.css'

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <section className={`${section} ${className || ''}`.trim()} {...props} />
}
