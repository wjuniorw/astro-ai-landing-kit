import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const testimonialsSection = style({
  position: 'relative',
  zIndex: 10,
})

export const grid = style({
  display: 'grid',
  gap: vars.spacing.lg,
  gridTemplateColumns: '1fr',
  marginTop: vars.spacing.xl,
  
  '@media': {
    'screen and (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    'screen and (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
})

export const card = style({
  display: 'flex',
  gap: vars.spacing.md,
  flexDirection: 'column',
  padding: vars.spacing.lg,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.colors.hoverTint}`,
  backgroundColor: `color-mix(in srgb, ${vars.colors.hoverTint} 20%, transparent)`,
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
})

export const avatar = style({
  width: '40px',
  height: '40px',
  display: 'flex',
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.colors.primaryContrast,
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.colors.primary,
  fontSize: vars.typography.fontSize.sm,
})
