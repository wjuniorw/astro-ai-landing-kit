import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const inputStyle = style({
  fontFamily: vars.typography.fontFamily,
  fontSize: vars.typography.fontSize.base,
  color: vars.colors.text,
  backgroundColor: vars.colors.background,
  padding: `${vars.spacing.sm} ${vars.spacing.md}`,
  borderRadius: vars.borderRadius.sm,
  border: `1px solid ${vars.colors.text}`,
  outline: 'none',
  transition: 'border-color 0.2s ease',

  ':focus': {
    borderColor: vars.colors.primary,
  },
})
