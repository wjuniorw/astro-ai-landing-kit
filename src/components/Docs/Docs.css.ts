import { style } from '@vanilla-extract/css'

import { vars } from '@core/ds/tokens.css'

export const docsLayout = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: vars.sizes.container,
  margin: '0 auto',
  
  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
    },
  },
})

export const sidebarContainer = style({
  display: 'none',
  
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'block',
      width: '250px',
      flexShrink: 0,
      position: 'sticky',
      top: vars.sizes.header,
      height: `calc(100vh - ${vars.sizes.header})`,
      overflowY: 'auto',
      paddingTop: vars.spacing.xl,
      paddingRight: vars.spacing.lg,
      borderRight: `1px solid ${vars.colors.hoverTint}`,
    },
  },
})

export const sidebarLink = style({
  display: 'block',
  padding: `${vars.spacing.sm} 0`,
  color: vars.colors.text,
  opacity: 0.6,
  textDecoration: 'none',
  fontSize: vars.typography.fontSize.sm,
  transition: 'all 0.2s ease',
  borderLeft: '2px solid transparent',
  paddingLeft: vars.spacing.md,
  marginLeft: `-${vars.spacing.md}`,
  
  ':hover': {
    opacity: 1,
    color: vars.colors.primary,
  },
  ':focus-visible': {
    opacity: 1,
    color: vars.colors.primary,
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '2px',
    borderRadius: vars.borderRadius.sm,
  },
})

export const sidebarLinkActive = style([sidebarLink, {
  opacity: 1,
  color: vars.colors.primary,
  borderLeftColor: vars.colors.primary,
  fontWeight: '600',
}])

export const mainContent = style({
  flex: 1,
  padding: `${vars.spacing.xl} ${vars.spacing.md}`,
  minWidth: 0,
  
  '@media': {
    'screen and (min-width: 1024px)': {
      padding: `${vars.spacing.xl} ${vars.spacing.xl}`,
      paddingRight: 0,
    },
  },
})

// Search Modal Styles
export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  backgroundColor: `color-mix(in srgb, ${vars.colors.background} 80%, transparent)`,
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '10vh',
})

export const modalBox = style({
  width: '100%',
  maxWidth: '600px',
  backgroundColor: vars.colors.background,
  borderRadius: vars.borderRadius.xl,
  border: `1px solid ${vars.colors.hoverTint}`,
  boxShadow: vars.shadows.lg,
  overflow: 'hidden',
  margin: `0 ${vars.spacing.md}`,
})

export const searchInputBox = style({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 24px',
  borderBottom: `1px solid ${vars.colors.hoverTint}`,
  gap: '12px',
  color: vars.colors.primary,
})

export const searchInput = style({
  flex: 1,
  border: 'none',
  backgroundColor: 'transparent',
  color: vars.colors.text,
  fontSize: vars.typography.fontSize.lg,
  outline: 'none',
  '::placeholder': {
    color: vars.colors.text,
    opacity: 0.4,
  },
})

export const searchResults = style({
  maxHeight: '400px',
  overflowY: 'auto',
  padding: vars.spacing.md,
})

export const searchResultItem = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 16px',
  borderRadius: vars.borderRadius.lg,
  textDecoration: 'none',
  color: vars.colors.text,
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  textAlign: 'left',
  width: '100%',
  fontFamily: 'inherit',
  transition: 'background-color 0.15s ease',
  
  ':hover': {
    backgroundColor: vars.colors.hoverTint,
  },
  ':focus': {
    outline: 'none',
    backgroundColor: vars.colors.hoverTint,
  },
  ':focus-visible': {
    outline: `2px solid ${vars.colors.primary}`,
    outlineOffset: '-2px',
    backgroundColor: vars.colors.hoverTint,
  },
})

export const srOnly = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
})

export const kbdStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 6px',
  backgroundColor: vars.colors.hoverTint,
  borderRadius: vars.borderRadius.sm,
  fontSize: '12px',
  fontFamily: 'monospace',
  opacity: 0.8,
})
