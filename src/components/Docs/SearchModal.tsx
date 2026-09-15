import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Text } from '@core/ui'

import { DOCS_SECTIONS } from './DocsSidebar'
import {
  kbdStyle,
  modalBox,
  modalOverlay,
  searchInput,
  searchInputBox,
  searchResultItem,
  searchResults,
  srOnly,
} from './Docs.css'

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Listen for Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Focus management: capture previous focus & trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    } else {
      setQuery('')
      previousActiveElement.current?.focus()
    }
  }, [isOpen])

  const handleKeyDownModal = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'input, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
    if (focusableElements.length === 0) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }
  }

  const filteredSections = DOCS_SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (id: string) => {
    setIsOpen(false)
    window.location.hash = id
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Search documentation"
            className={modalBox}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            onKeyDown={handleKeyDownModal}
          >
            <div className={searchInputBox}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                aria-label="Search documentation"
                className={searchInput}
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <kbd aria-hidden="true" className={kbdStyle}>ESC</kbd>
            </div>

            <div className={srOnly} aria-live="polite" aria-atomic="true">
              {query ? `${filteredSections.length} results found for ${query}` : ''}
            </div>

            <div className={searchResults} role="list" aria-label="Search results">
              {filteredSections.length > 0 ? (
                filteredSections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    role="listitem"
                    className={searchResultItem}
                    onClick={() => handleSelect(section.id)}
                  >
                    <Text weight="medium">{section.label}</Text>
                    <Text size="sm" style={{ opacity: 0.7 }}>Jump to section</Text>
                  </button>
                ))
              ) : (
                <Text align="center" style={{ opacity: 0.7, padding: '32px 0' }}>
                  No results found for "{query}"
                </Text>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
