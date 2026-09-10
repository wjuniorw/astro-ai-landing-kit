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

export const mobileHandle = style({
  position: 'absolute',
  bottom: '-24px', // Hang below the header
  left: '50%',
  transform: 'translateX(-50%)',
  width: '48px',
  height: '24px',
  backgroundColor: `color-mix(in srgb, ${vars.colors.background} 80%, transparent)`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  border: `1px solid ${vars.colors.hoverTint}`,
  borderTop: 'none',
  borderBottomLeftRadius: vars.borderRadius.lg,
  borderBottomRightRadius: vars.borderRadius.lg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: vars.colors.text,
  zIndex: 90,
  
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})

export const mobileNavContainer = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  backgroundColor: `color-mix(in srgb, ${vars.colors.background} 95%, transparent)`,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: `1px solid ${vars.colors.hoverTint}`,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 80,
  
  '@media': {
    'screen and (min-width: 768px)': {
      display: 'none',
    },
  },
})

export const mobileNavLink = style({
  padding: `${vars.spacing.md} ${vars.spacing.xl}`,
  color: vars.colors.text,
  textDecoration: 'none',
  fontSize: vars.typography.fontSize.base,
  fontWeight: '500',
  borderBottom: `1px solid ${vars.colors.hoverTint}`,
  
  ':active': {
    backgroundColor: vars.colors.hoverTint,
  },
})
