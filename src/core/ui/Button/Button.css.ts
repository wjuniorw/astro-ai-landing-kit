import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const buttonStyle = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSize.base,
  backgroundColor: vars.colors.primary,
  color: vars.colors.primaryContrast,
  padding: `10px ${vars.spacing.lg}`,
  borderRadius: vars.borderRadius.lg,
  fontWeight: '500',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  
  ':hover': {
    opacity: 0.9,
    boxShadow: vars.shadows.glow,
    transform: 'translateY(-1px)',
  },
  
  ':active': {
    opacity: 0.8,
    transform: 'translateY(1px)',
  },
})
