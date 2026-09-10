import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Container, Heading, Section, Text } from '@core/ui'

import { accordionButton, accordionContainer, accordionContent, accordionIcon, accordionItem, faqSection } from './FAQ.css'

const faqs = [
  {
    q: 'Why Astro over Next.js?',
    a: 'Astro excels at content-driven sites like landing pages by shipping zero JavaScript to the client by default. This results in unmatched load times and perfect Core Web Vitals.',
  },
  {
    q: 'How does Vanilla Extract work?',
    a: 'Vanilla Extract generates static CSS files at build time while giving you a fully type-safe TypeScript API for styling. You get the benefits of CSS-in-JS without the runtime cost.',
  },
  {
    q: 'Can I use other frameworks?',
    a: 'Yes! Astro Islands allow you to integrate React, Vue, Svelte, or SolidJS components seamlessly into the same page, exactly where you need interactivity.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First open by default

  return (
    <Section id="faq" className={faqSection}>
      <Container>
        <Heading align="center" size="4xl" style={{ marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Frequently Asked Questions
        </Heading>
        <Text align="center" size="lg" color="text" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Got questions? We've got answers to help you get started.
        </Text>

        <div className={accordionContainer}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className={accordionItem}>
                <button
                  className={accordionButton}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <Heading as="h3" size="xl" style={{ margin: 0 }}>
                    {faq.q}
                  </Heading>
                  <motion.div
                    className={accordionIcon}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {/* Simple SVG Chevron */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className={accordionContent}>
                        <Text>{faq.a}</Text>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
