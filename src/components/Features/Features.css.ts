import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const featuresSection = style({
  zIndex: 10,
  position: 'relative',
})

export const grid = style({
  display: 'grid',
  gap: vars.spacing.xl,
  gridTemplateColumns: '1fr',
  marginTop: vars.spacing.xl,
  
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const featureCard = style({
  padding: vars.spacing.xl,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.colors.hoverTint}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  backgroundColor: `color-mix(in srgb, ${vars.colors.hoverTint} 40%, transparent)`,
  
  ':hover': {
    boxShadow: vars.shadows.md,
    transform: 'translateY(-4px)',
    borderColor: `color-mix(in srgb, ${vars.colors.primary} 30%, transparent)`,
  },
})

export const iconBox = style({
  width: '48px',
  height: '48px',
  display: 'flex',
  fontSize: '24px',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.primary,
  marginBottom: vars.spacing.lg,
  borderRadius: vars.borderRadius.md,
  backgroundColor: `color-mix(in srgb, ${vars.colors.primary} 15%, transparent)`,
})
