import { Button, Container, Heading, Section, Text } from '@core/ui'

import { backgroundGlow, badge, buttonGroup, heroContent, heroSection } from './Hero.css'

export function Hero() {
  return (
    <Section className={heroSection}>
      <div className={backgroundGlow} />
      <Container>
        <div className={heroContent}>
          {/* Announcement Badge */}
          <a href="#" className={badge}>
            <span>🎉</span> Astro Template v1.0 is here <span>→</span>
          </a>

          {/* Main Headline */}
          <Heading
            align="center"
            as="h1"
            size="6xl"
            style={{ letterSpacing: '-0.03em', margin: '0 auto', maxWidth: '800px' }}
          >
            Build landing pages <br />
            <Text as="span" color="primary">
              faster than ever.
            </Text>
          </Heading>

          {/* Subtitle */}
          <Text
            align="center"
            color="text"
            size="xl"
            style={{ margin: '24px auto', maxWidth: '600px', opacity: 0.8 }}
          >
            A beautiful, fully-featured Astro & React template packed with a modern
            Design System, Vanilla Extract tokens, and framer-motion animations.
          </Text>

          {/* CTAs */}
          <div className={buttonGroup}>
            <Button as="a" href="/get-started" style={{ textDecoration: 'none' }}>Get Started Free</Button>
            <Button as="a" href="/docs" variant="ghost" style={{ textDecoration: 'none' }}>Read the Docs</Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
