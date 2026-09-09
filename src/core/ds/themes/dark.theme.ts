import { borderRadius, sizes, spacing, typography } from './shared'

export const darkColors = {
  primary: '#3291ff',
  secondary: '#ff79b0',
  primaryContrast: '#ffffff',
  background: '#111111',
  text: '#ffffff',
  success: '#34d399', // Emerald 400
  info: '#60a5fa', // Blue 400
  warning: '#fbbf24', // Amber 400
  danger: '#fb923c', // Orange 400
  error: '#f87171', // Red 400
  hoverTint: 'rgba(255, 255, 255, 0.05)',
  activeTint: 'rgba(255, 255, 255, 0.1)',
} as const

export const darkShadows = {
  sm: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  md: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -2px rgba(0, 0, 0, 0.5)',
  lg: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.5)',
  glow: '0 0 20px -5px rgba(50, 145, 255, 0.4)', // primary neon shine
} as const

export const darkTheme = {
  colors: darkColors,
  shadows: darkShadows,
  spacing,
  sizes,
  typography,
  borderRadius,
} as const
