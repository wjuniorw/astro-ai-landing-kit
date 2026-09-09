import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const baseHeading = style({
  fontFamily: vars.typography.fontFamily,
  fontWeight: '700', // Default bold for headings
  margin: 0,
  lineHeight: '1.2',
  letterSpacing: '-0.02em', // Tighter letter spacing looks premium for large text
})

export const sizeVariants = styleVariants({
  h1: { fontSize: vars.typography.fontSize['5xl'] }, // 64px
  h2: { fontSize: vars.typography.fontSize['4xl'] }, // 48px
  h3: { fontSize: vars.typography.fontSize['3xl'] }, // 32px
  h4: { fontSize: vars.typography.fontSize['2xl'] }, // 24px
  h5: { fontSize: vars.typography.fontSize.xl },     // 20px
  h6: { fontSize: vars.typography.fontSize.lg },     // 18px
})

export const weightVariants = styleVariants({
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
  extrabold: { fontWeight: '800' },
})

export const alignVariants = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
})

export const colorVariants = styleVariants({
  text: { color: vars.colors.text },
  primary: { color: vars.colors.primary },
})
