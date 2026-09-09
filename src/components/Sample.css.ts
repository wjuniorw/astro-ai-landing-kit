import { style } from '@vanilla-extract/css'

export const titleStyle = style({
  color: 'tomato',
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem',
  border: '2px solid tomato',
  borderRadius: '8px',
  margin: '2rem',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      backgroundColor: 'tomato',
      color: 'white'
    }
  }
})
