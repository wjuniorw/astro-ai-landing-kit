import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ArrowUpIcon } from '@core/ui/icons'

import { backToTopButton } from './BackToTop.css'

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    // Trigger the icon animation
    setIsAnimating(true)
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    // Reset the animation state after it completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 450)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          aria-label="Back to top"
          className={backToTopButton}
          onClick={scrollToTop}
          // The "Bubble Rise" entrance/exit animation
          initial={{ opacity: 0, scale: 0.3, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 40 }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 25,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpIcon isAnimating={isAnimating} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
