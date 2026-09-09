export const palette = {
  primary: '#0070f3',
  secondary: '#ff4081',
  background: '#ffffff',
  text: '#333333',
  error: '#ff0000',
} as const

export const spacing = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
} as const

export const typography = {
  fontFamily: 'Inter, sans-serif',
  fontSize: {
    sm: '12px',
    base: '16px',
    lg: '20px',
    xl: '24px',
  },
} as const

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  full: '9999px',
} as const

// The raw theme object literal that can be used outside Vanilla Extract
export const rawTheme = {
  colors: palette,
  spacing,
  typography,
  borderRadius,
} as const
