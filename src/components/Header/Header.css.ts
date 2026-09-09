import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const header = style({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  width: '100%',
  height: vars.sizes.header,
  display: 'flex',
  alignItems: 'center',
  // Usamos color-mix nativo do CSS moderno para dar opacidade (80%) na nossa variável HEX dinâmica!
  backgroundColor: `color-mix(in srgb, ${vars.colors.background} 80%, transparent)`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)', // Safari support
  borderBottom: `1px solid ${vars.colors.hoverTint}`,
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
})

export const navLinks = style({
  display: 'none', // Esconde no mobile por padrão (hambúrguer no futuro)
  gap: vars.spacing.lg,
  alignItems: 'center',
  
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'flex',
    },
  },
})

export const navLink = style({
  color: vars.colors.text,
  textDecoration: 'none',
  fontSize: vars.typography.fontSize.sm,
  fontWeight: '500',
  transition: 'color 0.2s ease',
  
  ':hover': {
    color: vars.colors.primary,
  },
})

export const rightSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing.md,
})
