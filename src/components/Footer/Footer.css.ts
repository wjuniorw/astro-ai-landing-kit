import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const footerSection = style({
  marginTop: '64px',
  paddingTop: vars.spacing.xl,
  paddingBottom: vars.spacing.xl,
  borderTop: `1px solid ${vars.colors.hoverTint}`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      marginTop: '120px',
    },
  },
})

export const ctaBox = style({
  display: 'flex',
  textAlign: 'center',
  padding: '48px 24px',
  marginBottom: '80px',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: vars.borderRadius['2xl'],
  backgroundColor: `color-mix(in srgb, ${vars.colors.primary} 10%, transparent)`,
  border: `1px solid color-mix(in srgb, ${vars.colors.primary} 20%, transparent)`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      padding: '64px 48px',
      marginBottom: '120px',
    },
  },
})

export const footerLayout = style({
  display: 'flex',
  gap: vars.spacing.lg,
  alignItems: 'center',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  
  '@media': {
    'screen and (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
})

export const linkGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: vars.spacing.md,
  justifyContent: 'center',
})

export const footerLink = style({
  opacity: 0.6,
  textDecoration: 'none',
  color: vars.colors.text,
  fontSize: vars.typography.fontSize.sm,
  transition: 'opacity 0.2s ease, color 0.2s ease',
  
  ':hover': {
    opacity: 1,
    color: vars.colors.primary,
  },
})
