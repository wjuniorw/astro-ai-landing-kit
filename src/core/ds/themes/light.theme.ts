import { borderRadius, spacing, typography } from './shared'

export const lightColors = {
  primary: '#0070f3',
  secondary: '#ff4081',
  background: '#ffffff',
  text: '#111111',
  error: '#ff0000',
} as const

export const lightTheme = {
  colors: lightColors,
  spacing,
  typography,
  borderRadius,
} as const
