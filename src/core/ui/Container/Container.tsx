import type { HTMLAttributes } from 'react'

import { container } from './Container.css'

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`${container} ${className || ''}`.trim()} {...props} />
}
