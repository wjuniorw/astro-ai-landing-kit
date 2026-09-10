import { Container, Heading, Section, Text } from '@core/ui'

import { featureCard, featuresSection, grid, iconBox } from './Features.css'

export function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Zero JavaScript',
      desc: 'Built with Astro, shipping 0 bytes of JS to the client by default for unmatched performance.',
    },
    {
      icon: '💅',
      title: 'Type-Safe Styling',
      desc: 'Vanilla Extract gives you the power of CSS-in-TS with zero runtime overhead.',
    },
    {
      icon: '✨',
      title: 'Smooth Animations',
      desc: 'Declarative, powerful animations built right in using Framer Motion.',
    },
  ]
  
  return (
    <Section id="features" className={featuresSection}>
      <Container>
        <Heading align="center" size="4xl" style={{ marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Everything you need
        </Heading>
        <Text align="center" size="lg" color="text" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Stop wasting time configuring tooling. Start building your product with a fully featured, production-ready stack.
        </Text>
        
        <div className={grid}>
          {features.map((f, i) => (
             <div key={i} className={featureCard}>
                <div className={iconBox}>{f.icon}</div>
                <Heading as="h3" size="h5" style={{ marginBottom: '8px' }}>
                  {f.title}
                </Heading>
                <Text color="text" style={{ opacity: 0.8, lineHeight: '1.6' }}>
                  {f.desc}
                </Text>
             </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
