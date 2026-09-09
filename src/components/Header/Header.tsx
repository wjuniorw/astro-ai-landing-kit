import { Button, Container, Text, ThemeSwitcher } from '@core/ui'

import { header, navLink, navLinks, rightSection } from './Header.css'

export function Header() {
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
    </header>
  )
}
