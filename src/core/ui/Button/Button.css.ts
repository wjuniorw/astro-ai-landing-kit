import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const buttonStyle = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSize.base,
  backgroundColor: vars.colors.primary,
  color: vars.colors.background,
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.md,
  border: 'none',
  cursor: 'pointer',
  transition: 'opacity 0.2s ease',
  
  ':hover': {
    opacity: 0.9,
  },
  
  ':active': {
    opacity: 0.8,
  },
})
