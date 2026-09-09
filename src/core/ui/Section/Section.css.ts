import { style } from '@vanilla-extract/css'

export const section = style({
  paddingTop: '64px',
  paddingBottom: '64px',
  
  '@media': {
    'screen and (min-width: 768px)': {
      paddingTop: '96px',
      paddingBottom: '96px',
    },
  },
})
