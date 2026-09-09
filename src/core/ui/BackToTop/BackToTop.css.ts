import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const backToTopButton = style({
  position: 'fixed',
  bottom: vars.spacing.xl,
  right: vars.spacing.xl,
  width: '48px',
  height: '48px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.colors.primary,
  color: vars.colors.background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  zIndex: 50,
  
  selectors: {
    '&:hover': {
      opacity: 0.9,
    },
  },
})
