import { useEffect, useState } from 'react'
import { SearchModal } from '@components/Docs'
import { AnimatePresence, motion } from 'framer-motion'

import { Button, Container, Text, ThemeSwitcher } from '@core/ui'

import { header, mobileHandle, mobileNavContainer, mobileNavLink, navLink, navLinks, rightSection, searchTrigger } from './Header.css'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])
  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className={header}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

        {/* Logo / Brand */}
        <Text as="a" href="/" weight="bold" size="lg" color="text" style={{ textDecoration: 'none', letterSpacing: '-0.02em' }}>
          Landing<Text as="span" color="primary">Template</Text>
        </Text>

        {/* Desktop Navigation */}
        <nav className={navLinks} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section (Theme + CTA) */}
        <div className={rightSection}>
          {/* Search Trigger */}
          <button
            type="button"
            className={searchTrigger}
            aria-keyshortcuts="Control+k Meta+k"
            aria-label="Search documentation (Press ⌘K)"
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))}
          >
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <Text size="sm" style={{ opacity: 0.8 }}>Search...</Text>
            <kbd style={{ padding: '2px 4px', backgroundColor: 'var(--colors-hoverTint)', borderRadius: '4px', fontSize: '10px', fontFamily: 'monospace' }} aria-hidden="true">
              ⌘K
            </kbd>
          </button>

          <ThemeSwitcher />
          <div className={navLinks}>
            <Button as="a" href="/get-started" style={{ padding: '8px 16px', fontSize: '14px', textDecoration: 'none' }}>
              Get Started
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Handle (Parchment Pull) */}
      <button
        type="button"
        aria-expanded={isOpen}
        className={mobileHandle}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <motion.svg
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>

      {/* Mobile Parchment Unroll */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
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
              <Button as="a" href="/get-started" style={{ width: '100%', textDecoration: 'none', textAlign: 'center' }}>Get Started</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <SearchModal />
    </header>
  )
}
