import { Container, Heading, Section, Text } from '@core/ui'

import { avatar, card, grid, header, testimonialsSection } from './Testimonials.css'

export function Testimonials() {
  const reviews = [
    {
      init: 'A',
      name: 'Alice Cooper',
      role: 'Frontend Eng at Vercel',
      text: 'This template saved me hours. The design system is so clean, type-safe, and incredibly easy to extend.',
    },
    {
      init: 'B',
      name: 'Bob Marley',
      role: 'Indie Hacker',
      text: 'I love how lightweight it is. Shipping zero JS for the layout while keeping React for interactivity is mind-blowing.',
    },
    {
      init: 'C',
      name: 'Charlie Puth',
      role: 'Product Designer',
      text: 'The attention to detail on the typography and the glowing dark mode shadows is top tier. Beautiful defaults.',
    },
  ]

  return (
    <Section id="testimonials" className={testimonialsSection}>
      <Container>
        <Heading align="center" size="4xl" style={{ marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Loved by builders
        </Heading>
        <Text align="center" size="lg" color="text" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Don't just take our word for it. See what the community is saying about the Landing Template.
        </Text>
        <div className={grid}>
          {reviews.map((r, i) => (
            <div key={i} className={card}>
              <div className={header}>
                <div className={avatar}>{r.init}</div>
                <div>
                  <Heading as="h4" size="h6" style={{ marginBottom: '2px' }}>
                    {r.name}
                  </Heading>
                  <Text size="sm" style={{ opacity: 0.6 }}>
                    {r.role}
                  </Text>
                </div>
              </div>
              <Text style={{ opacity: 0.8, lineHeight: '1.6' }}>"{r.text}"</Text>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
