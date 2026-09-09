import { createGlobalTheme, createThemeContract, globalStyle } from '@vanilla-extract/css'

import { darkTheme, lightTheme } from './theme'

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

// Bind the light theme to the :root (default) and explicit data-theme="light"
createGlobalTheme(':root, [data-theme="light"]', vars, lightTheme)

// Bind the dark theme when data-theme="dark" is present
createGlobalTheme('[data-theme="dark"]', vars, darkTheme)

globalStyle('body', {
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  transition: 'background-color 0.3s ease, color 0.3s ease',
})
