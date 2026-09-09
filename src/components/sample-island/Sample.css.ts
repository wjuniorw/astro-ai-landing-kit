import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const titleStyle = style({
  color: vars.colors.primary,
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem',
  border: `2px solid ${vars.colors.primary}`,
  borderRadius: vars.borderRadius.md,
  margin: '2rem',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.hoverTint,
    },
  },
})
