import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const baseButton = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSize.base,
  padding: `10px ${vars.spacing.lg}`,
  borderRadius: vars.borderRadius.lg,
  fontWeight: '500',
  border: '1px solid transparent', // reserve space
  cursor: 'pointer',
  transition: 'all 0.2s ease',
})

export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: vars.colors.primary,
    color: vars.colors.primaryContrast,
    ':hover': {
      opacity: 0.9,
      boxShadow: vars.shadows.glow,
      transform: 'translateY(-1px)',
    },
    ':active': {
      opacity: 0.8,
      transform: 'translateY(1px)',
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: vars.colors.text,
    borderColor: vars.colors.hoverTint,
    ':hover': {
      backgroundColor: vars.colors.hoverTint,
      transform: 'translateY(-1px)',
    },
    ':active': {
      backgroundColor: vars.colors.activeTint,
      transform: 'translateY(1px)',
    },
  },
})
