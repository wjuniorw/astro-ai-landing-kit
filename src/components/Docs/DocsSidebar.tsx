import { useEffect, useState } from 'react'

import { Heading } from '@core/ui'

import { sidebarContainer, sidebarLink, sidebarLinkActive } from './Docs.css'

export const DOCS_SECTIONS = [
  { id: 'installing', label: 'Installing' },
  { id: 'seo', label: 'SEO & Meta Tags' },
  { id: 'components', label: 'Built-in Components' },
  { id: 'prompts', label: 'AI Prompt Examples' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
]

export function DocsSidebar() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' } // Trigger when element is near the top of the viewport
    )

    DOCS_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className={sidebarContainer} aria-label="Table of contents">
      <Heading as="h4" size="sm" style={{ marginBottom: '16px', paddingLeft: '16px' }}>
        On this page
      </Heading>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {DOCS_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={activeId === section.id ? sidebarLinkActive : sidebarLink}
            aria-current={activeId === section.id ? 'true' : undefined}
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
