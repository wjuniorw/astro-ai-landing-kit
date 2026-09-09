import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const container = style({
  width: '100%',
  margin: '0 auto',
  maxWidth: vars.sizes.container,
  padding: `0 ${vars.spacing.md}`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `0 ${vars.spacing.lg}`,
    },
    'screen and (min-width: 1024px)': {
      padding: `0 ${vars.spacing.xl}`,
    },
  },
})
