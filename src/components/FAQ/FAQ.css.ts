import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const faqSection = style({
  position: 'relative',
})

export const accordionContainer = style({
  display: 'flex',
  margin: '0 auto',
  maxWidth: '800px',
  gap: vars.spacing.md,
  flexDirection: 'column',
  marginTop: vars.spacing.xl,
})

export const accordionItem = style({
  overflow: 'hidden',
  borderRadius: vars.borderRadius.lg,
  border: `1px solid ${vars.colors.hoverTint}`,
  backgroundColor: `color-mix(in srgb, ${vars.colors.hoverTint} 20%, transparent)`,
})

export const accordionButton = style({
  width: '100%',
  display: 'flex',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  alignItems: 'center',
  padding: vars.spacing.lg,
  backgroundColor: 'transparent',
  justifyContent: 'space-between',
  transition: 'background-color 0.2s ease',
  
  ':hover': {
    backgroundColor: vars.colors.hoverTint,
  },
})

export const accordionIcon = style({
  opacity: 0.6,
  display: 'flex',
  alignItems: 'center',
  color: vars.colors.text,
  justifyContent: 'center',
})

export const accordionContent = style({
  opacity: 0.8,
  lineHeight: '1.6',
  padding: `0 ${vars.spacing.lg} ${vars.spacing.lg}`,
})
