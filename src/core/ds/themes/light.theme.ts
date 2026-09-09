import { borderRadius, sizes, spacing, typography } from './shared'

export const lightColors = {
  primary: '#0070f3',
  secondary: '#ff4081',
  primaryContrast: '#ffffff',
  background: '#ffffff',
  text: '#111111',
  success: '#10b981', // Emerald 500
  info: '#3b82f6', // Blue 500
  warning: '#f59e0b', // Amber 500 (Adding warning as a bonus standard)
  danger: '#f97316', // Orange 500
  error: '#ef4444', // Red 500
  hoverTint: 'rgba(0, 0, 0, 0.05)',
  activeTint: 'rgba(0, 0, 0, 0.1)',
} as const

export const lightShadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  glow: '0 4px 15px -3px rgba(0, 112, 243, 0.3)', // primary glow
} as const

export const lightTheme = {
  colors: lightColors,
  shadows: lightShadows,
  spacing,
  sizes,
  typography,
  borderRadius,
} as const
