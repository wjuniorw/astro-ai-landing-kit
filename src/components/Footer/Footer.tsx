import { Button, Container, Heading, Text } from '@core/ui'

import { ctaBox, footerLayout, footerLink, footerSection, linkGroup } from './Footer.css'

export function Footer() {
  return (
    <footer className={footerSection}>
      <Container>
        {/* Pre-footer CTA */}
        <div className={ctaBox}>
          <Heading align="center" size="4xl" style={{ marginBottom: '16px', letterSpacing: '-0.02em' }}>
            Ready to ship?
          </Heading>
          <Text
            align="center"
            size="lg"
            style={{ margin: '0 auto 32px', maxWidth: '500px', opacity: 0.8 }}
          >
            Join thousands of developers building fast, beautiful landing pages with our modern template.
          </Text>
          <Button style={{ padding: '12px 32px', fontSize: '16px' }}>
            Start Building for Free
          </Button>
        </div>

        {/* Real Footer */}
        <div className={footerLayout}>
          <Text size="sm" style={{ opacity: 0.6 }}>
            © {new Date().getFullYear()} LandingTemplate. All rights reserved.
          </Text>
          
          <div className={linkGroup}>
            <a href="#" className={footerLink}>
              Privacy Policy
            </a>
            <a href="#" className={footerLink}>
              Terms of Service
            </a>
            <a href="#" className={footerLink}>
              Twitter
            </a>
            <a href="#" className={footerLink}>
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
