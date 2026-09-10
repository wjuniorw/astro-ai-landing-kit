import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button, Container, Text, ThemeSwitcher } from '@core/ui'

import { header, mobileHandle, mobileNavContainer, mobileNavLink, navLink, navLinks, rightSection } from './Header.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className={header}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        
        {/* Logo / Brand */}
        <Text as="a" href="#" weight="bold" size="lg" color="text" style={{ textDecoration: 'none', letterSpacing: '-0.02em' }}>
          Landing<Text as="span" color="primary">Template</Text>
        </Text>

        {/* Desktop Navigation */}
        <nav className={navLinks}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section (Theme + CTA) */}
        <div className={rightSection}>
          <ThemeSwitcher />
          <div className={navLinks}>
            <Button style={{ padding: '8px 16px', fontSize: '14px' }}>
              Get Started
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Handle (Parchment Pull) */}
      <div className={mobileHandle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Navigation">
        <motion.svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </div>

      {/* Mobile Parchment Unroll */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={mobileNavContainer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={mobileNavLink}
                onClick={() => setIsOpen(false)} // Auto-close on click
              >
                {link.label}
              </a>
            ))}
            <div style={{ padding: '16px 24px' }}>
              <Button style={{ width: '100%' }}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
