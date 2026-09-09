import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

import { rawTheme } from './theme'

// Creates a typed contract based on the raw object.
// This allows migrating or swapping themes later.
export const vars = createThemeContract({
  colors: {
    primary: '',
    secondary: '',
    background: '',
    text: '',
    error: '',
  },
  spacing: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  typography: {
    fontFamily: '',
    fontSize: {
      sm: '',
      base: '',
      lg: '',
      xl: '',
    },
  },
  borderRadius: {
    sm: '',
    md: '',
    lg: '',
    full: '',
  },
})

// Binds the raw theme to the contract in the :root element
createGlobalTheme(':root', vars, rawTheme)
