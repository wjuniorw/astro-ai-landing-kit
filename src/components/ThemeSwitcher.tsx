import { useEffect, useState } from 'react'

import { ToggleIcon } from '@core/ui/icons/ToggleIcon'

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  useEffect(() => {
    // Read the current theme from HTML element
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    setTheme(currentTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    
    // Apply theme to the document and save preference
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }
  return (
    <div title="Toggle Theme" style={{ display: 'inline-flex' }}>
      <ToggleIcon isDark={theme === 'dark'} onClick={toggleTheme} />
    </div>
  )
}
