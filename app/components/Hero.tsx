'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const designerTypes = ['Product', 'UX', 'Architectural']
  const finalText = 'A Product, UX, An Architectural ... Designer'
  const [displayText, setDisplayText] = useState('A  ... Designer')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [showFinal, setShowFinal] = useState(false)
  const [finalCharIndex, setFinalCharIndex] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [isHoveringImage, setIsHoveringImage] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  // Handle final text typing
  useEffect(() => {
    if (!showFinal) return

    if (finalCharIndex < finalText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(finalText.substring(0, finalCharIndex + 1))
        setFinalCharIndex(finalCharIndex + 1)
      }, 100) // Same speed as regular typing for consistency
      return () => clearTimeout(timeout)
    }
  }, [showFinal, finalCharIndex, finalText])

  // Handle designer types typing
  useEffect(() => {
    if (showFinal) {
      return
    }

    const currentType = designerTypes[currentIndex]
    const prefix = currentType === 'Architectural' ? 'An ' : 'A '
    const suffix = ' ... Designer'
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentType.length) {
          // Type designer type with suffix visible from start
          setDisplayText(`${prefix}${currentType.substring(0, charIndex + 1)}${suffix}`)
          setCharIndex(charIndex + 1)
        } else if (charIndex === currentType.length) {
          // Add question mark after designer type is complete
          setDisplayText(`${prefix}${currentType}?${suffix}`)
          setCharIndex(charIndex + 1)
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (charIndex > currentType.length) {
          // Remove question mark first, keep designer type and suffix
          setDisplayText(`${prefix}${currentType}${suffix}`)
          setCharIndex(charIndex - 1)
        } else if (charIndex > 0) {
          // Delete designer type character by character, keep suffix
          setDisplayText(`${prefix}${currentType.substring(0, charIndex - 1)}${suffix}`)
          setCharIndex(charIndex - 1)
        } else {
          // Finished deleting, move to next type
          setIsDeleting(false)
          const nextIndex = currentIndex + 1
          
          if (nextIndex >= designerTypes.length) {
            // All types shown, transition to final text
            // First show "A " to match the final text start
            setDisplayText('A ')
            setTimeout(() => {
              // Start typing final text from position 2 (after "A ")
              setFinalCharIndex(2)
              setShowFinal(true)
            }, 300)
          } else {
            setCurrentIndex(nextIndex)
          }
        }
      }
    }, isDeleting ? 50 : 100) // Faster when deleting

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, designerTypes, showFinal])

  // Handle mouse movement for custom cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

  const handleMouseEnter = () => {
    setIsHoveringImage(true)
  }

  const handleMouseLeave = () => {
    setIsHoveringImage(false)
  }


  // Render final text with hoverable designer types
  const renderFinalText = () => {
    const isComplete = showFinal && finalCharIndex >= finalText.length
    const textToRender = isComplete ? finalText : displayText
    
    if (!showFinal) {
      // During typing animation, split to place cursor before "... Designer"
      const suffix = ' ... Designer'
      const hasSuffix = textToRender.includes(suffix)
      
      if (hasSuffix) {
        const typingPart = textToRender.replace(suffix, '')
        return (
          <>
            {typingPart}
            <span className="animate-pulse inline-block ml-1">|</span>
            {suffix}
          </>
        )
      } else {
        // Fallback if suffix not found
        return (
          <>
            {textToRender}
            <span className="animate-pulse inline-block ml-1">|</span>
          </>
        )
      }
    }
    
    // Final text typing or complete
    const showCursor = showFinal && finalCharIndex < finalText.length
    if (!isComplete) {
      return (
        <>
          {textToRender}
          {showCursor && <span className="animate-pulse inline-block ml-1">|</span>}
        </>
      )
    }

    // Split the text and wrap designer types in hoverable spans
    const parts = textToRender.split(/(Product|UX|Architectural)/)
    return (
      <>
        {parts.map((part, index) => {
          if (part === 'Product' || part === 'UX' || part === 'Architectural') {
            return (
              <span
                key={index}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {part}
              </span>
            )
          }
          return <span key={index}>{part}</span>
        })}
        {showCursor && <span className="animate-pulse inline-block ml-1">|</span>}
      </>
    )
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white px-4 sm:px-6 lg:px-8 pt-16 md:pt-20"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
              Hi, I'm{' '}
              <span className="text-blue-600">Ryan Creary</span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block mt-4 min-h-[3rem]"
              >
                {renderFinalText()}
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-black max-w-2xl mb-12"
            >
              I create innovative mobile applications and digital solutions that
              make a difference. Explore my work below.
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden -mt-16 lg:-mt-20"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isHoveringImage ? 'none' : 'default' }}
          >
            <motion.div
              whileHover={{
                rotate: 3,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
              className="w-full h-full"
            >
              {!imageError ? (
                <Image
                  src="/photos/hero.png"
                  alt="Ryan Creary"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl">
                  <span className="text-6xl">👤</span>
                </div>
              )}
            </motion.div>
            
            {/* Custom Text Bubble Cursor */}
            {isHoveringImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed pointer-events-none z-50"
                style={{
                  left: cursorPosition.x + 20,
                  top: cursorPosition.y - 60,
                }}
              >
                <div className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                  isn't he handsome
                  {/* Speech bubble tail */}
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

