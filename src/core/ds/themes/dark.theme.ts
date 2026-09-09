import { borderRadius, spacing, typography } from './shared'

export const darkColors = {
  primary: '#3291ff',
  secondary: '#ff79b0',
  background: '#111111',
  text: '#ffffff',
  error: '#ff4444',
} as const

export const darkTheme = {
  colors: darkColors,
  spacing,
  typography,
  borderRadius,
} as const
