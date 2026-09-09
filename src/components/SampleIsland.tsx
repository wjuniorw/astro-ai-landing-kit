import { Button, Input } from '@core/ui'

import { titleStyle } from './Sample.css'
import { ThemeSwitcher } from './ThemeSwitcher'

export function SampleIsland() {
  return (
    <div className={titleStyle}>
      <p>Hello from React + Vanilla Extract Island! 🏝️</p>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px' }}>
        <ThemeSwitcher />
        <Input placeholder="Type something..." />
        <Button onClick={() => alert('Button clicked!')}>Click me</Button>
      </div>
    </div>
  )
}
