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
  color: vars.colors.primaryContrast,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  cursor: 'pointer',
  boxShadow: `${vars.shadows.lg}, ${vars.shadows.glow}`,
  transition: 'box-shadow 0.2s ease, background-color 0.2s ease',
  willChange: 'transform, opacity', // Force hardware acceleration
  zIndex: 50,
  
  selectors: {
    '&:hover': {
      opacity: 1,
      boxShadow: `${vars.shadows.lg}, ${vars.shadows.glow}, ${vars.shadows.glow}`, // Enhanced dynamic glow on hover
    },
  },
})
