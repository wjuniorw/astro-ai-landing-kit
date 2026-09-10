import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const heroSection = style({
  display: 'flex',
  overflow: 'hidden',
  paddingTop: '80px',
  position: 'relative',
  paddingBottom: '80px',
  flexDirection: 'column',
  justifyContent: 'center',
  
  '@media': {
    'screen and (min-width: 768px)': {
      paddingTop: '120px',
      paddingBottom: '120px',
    },
    'screen and (min-width: 1024px)': {
      paddingTop: '160px',
      paddingBottom: '160px',
    },
  },
})

export const heroContent = style({
  zIndex: 10,
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  position: 'relative',
  flexDirection: 'column',
})

export const badge = style({
  fontWeight: '600',
  alignItems: 'center',
  gap: vars.spacing.sm,
  display: 'inline-flex',
  textDecoration: 'none',
  color: vars.colors.primary,
  transition: 'all 0.2s ease',
  marginBottom: vars.spacing.lg,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.typography.fontSize.sm,
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  backgroundColor: `color-mix(in srgb, ${vars.colors.primary} 10%, transparent)`,
  border: `1px solid color-mix(in srgb, ${vars.colors.primary} 20%, transparent)`,
  
  ':hover': {
    transform: 'translateY(-1px)',
    backgroundColor: `color-mix(in srgb, ${vars.colors.primary} 15%, transparent)`,
  },
})

export const buttonGroup = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
  flexDirection: 'column',
  marginTop: vars.spacing.xl,
  
  '@media': {
    'screen and (min-width: 480px)': {
      width: 'auto',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
})

// Optional background glow effect
export const backgroundGlow = style({
  zIndex: 0,
  top: '50%',
  left: '50%',
  width: '600px',
  height: '600px',
  position: 'absolute',
  pointerEvents: 'none',
  transform: 'translate(-50%, -50%)',
  background: `radial-gradient(circle, color-mix(in srgb, ${vars.colors.primary} 15%, transparent) 0%, transparent 70%)`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      width: '800px',
      height: '800px',
    },
  },
})
