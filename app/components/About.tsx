'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const skills = [
  { name: 'Product Design', icon: '🎨' },
  { name: 'UX Strategy', icon: '💡' },
  { name: 'Prototyping', icon: '⚡' },
  { name: 'Architecture', icon: '🏗️' },
  { name: 'Collaboration', icon: '🤝' },
]

const carouselItems = [
  {
    image: '/photos/image 1.png',
    title: 'Product Design',
    subtitle: 'Innovative solutions',
  },
  {
    image: '/photos/image 2.png',
    title: 'UX Strategy',
    subtitle: 'User-centered design',
  },
  {
    image: '/photos/image 3.png',
    title: 'Architecture',
    subtitle: 'Scalable systems',
  },
  {
    image: '/photos/image 4.png',
    title: 'Product Design',
    subtitle: 'Innovative solutions',
  },
  {
    image: '/photos/image 5.png',
    title: 'UX Strategy',
    subtitle: 'User-centered design',
  },
  {
    image: '/photos/image 6.png',
    title: 'Architecture',
    subtitle: 'Scalable systems',
  },
]

const experiences = [
  {
    title: 'Designer',
    company: 'Dexters',
    location: 'London, England',
    year: 'Oct 2025 - Present',
    bullets: [
      'Produce measured floor plans for residential properties, including large-scale properties over 1000 sqft.',
      'Leverage Photoshop and AutoCAD to aid multiple Real estate firms.',
    ],
  },
  {
    title: 'Project Manager',
    company: 'Nebula Padel Community',
    location: 'London, England',
    year: 'Nov 2024 - Present',
    bullets: [
      'Built and manage a 400+ member sports community overseeing scheduling, payments, and operations.',
      'Implemented automation for attendance and payments, reducing admin work by 40%.',
    ],
  },
  {
    title: 'Architectural Assistant Part 1',
    company: 'Adamson Associates',
    location: 'London, England',
    year: 'Apr 2024 - Jul 2025',
    bullets: [
      'Delivered comprehensive construction packages, including detailed floor assembly build-ups.',
      'Supported production of waterproofing and thermal diagrams to ensure compliance with performance standards.',
    ],
  },
]

const achievements = [
  {
    title: 'Design System Creation',
    description: 'Built comprehensive design systems used across multiple product teams.',
    stat: '5+ Products',
  },
  {
    title: 'User Research',
    description: 'Conducted extensive user interviews and usability testing to inform design decisions.',
    stat: '100+ Users',
  },
]

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(1) // Start with center card

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getVisibleCards = () => {
    const cards = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + carouselItems.length) % carouselItems.length
      cards.push({ ...carouselItems[index], position: i })
    }
    return cards
  }

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            like everyone i have story as well...
          </p>
        </motion.div>

        {/* Three Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Left Card - Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-black mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-black">{exp.title}</h4>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      {exp.location && (
                        <p className="text-xs text-gray-500">{exp.location}</p>
                      )}
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                      {exp.year}
                    </span>
                  </div>
                  {exp.bullets && (
                    <ul className="space-y-1.5">
                      {exp.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm text-gray-700 leading-relaxed flex items-start">
                          <span className="text-blue-600 mr-2 mt-1.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {index < experiences.length - 1 && (
                    <div className="border-t border-gray-100 pt-6" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Column - Two Stacked Cards */}
          <div className="flex flex-col gap-3 lg:gap-4 h-full">
            {/* First Card - Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all flex-shrink-0"
            >
              <div className="text-center mb-6">
                {/* Multi-Card Carousel */}
                <div className="relative w-full h-64 mb-4 overflow-visible">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {getVisibleCards().map((card, idx) => {
                      const isCenter = card.position === 0
                      const isLeft = card.position === -1
                      const isRight = card.position === 1
                      
                      return (
                        <motion.div
                          key={`${card.title}-${idx}`}
                          initial={{ opacity: 0, scale: 0.8, x: isLeft ? -100 : isRight ? 100 : 0 }}
                          animate={{
                            opacity: isCenter ? 1 : 0.5,
                            scale: isCenter ? 1 : 0.8,
                            x: isLeft ? -60 : isRight ? 60 : 0,
                            rotate: isLeft ? -5 : isRight ? 5 : 0,
                            zIndex: isCenter ? 10 : 5,
                          }}
                          transition={{ duration: 0.4 }}
                          className={`absolute ${
                            isCenter ? 'w-full' : 'w-3/4'
                          } h-full`}
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
                
                <div className="space-y-1 mb-2">
                  <p className="text-xs text-gray-500">DESIGNER • 10+ YEARS • PRODUCT</p>
                  <h3 className="text-2xl font-bold text-black">Ryan Creary</h3>
                  <p className="text-sm text-gray-600">Product & UX Designer</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 leading-relaxed text-center">
                With over a decade of design experience, I lead strategy and execution to deliver innovative solutions globally.
              </p>
            </motion.div>

            {/* Second Card - Currently Watching */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all flex-1 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-black mb-6 text-center">
                Currently Watching
              </h3>
              <div className="flex-1 flex flex-col">
                <div className="relative w-full flex-1 min-h-[200px] rounded-xl overflow-hidden bg-gray-100 group cursor-pointer">
                  <Image
                    src="/photos/watching/b2a28df9be0a12a98f505430b5362cf0e475de05c48aeced626adcbc53f77792.jpg"
                    alt="Gachiakuta"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-lg text-black mb-1">Gachiakuta</h4>
                  <p className="text-xs text-gray-500">Anime Series</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Three Stacked Cards */}
          <div className="flex flex-col gap-3 lg:gap-4 h-full">
            {/* First Card - Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Currently located in London, UK
                </p>
              </div>
            </motion.div>

            {/* Second Card - Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all flex flex-col"
            >
              <div className="relative w-full flex-[0.6] min-h-[200px] overflow-hidden bg-gray-100">
                <Image
                  src="/photos/460a0ad7-d0ef-4082-9cde-3822745ef988.jpg"
                  alt="Research"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex-[0.4] p-6 lg:p-8 flex flex-col">
                <h3 className="text-xl font-semibold text-black mb-6">Nebula Padel Club</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
Helped build and manage a 400+ member padel community overseeing scheduling, payments, and operations. Its super fun you should join us!                </p>
              </div>
            </motion.div>

            {/* Third Card - Softwares */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all"
            >
              <h3 className="text-xl font-semibold text-black mb-6">
                Softwares
              </h3>
              <div className="overflow-hidden">
                <div className="flex animate-scroll">
                  {[
                    '/icons/Figma-logo.svg',
                    '/icons/Adobe_Photoshop_CC_icon (1).svg',
                    '/icons/Adobe_Illustrator_CC_icon.svg',
                    '/icons/Adobe_Indesign_CC_2026_icon.svg',
                    '/icons/cursor-ai-code-icon.webp',
                    '/icons/HTML5_logo_and_wordmark.svg.png',
                    '/icons/5968242.png',
                    '/icons/images.png',
                    '/icons/unnamed.png',
                  ].map((icon, index) => (
                    <div key={index} className="flex-shrink-0 mx-4 w-16 h-16 relative">
                      <Image
                        src={icon}
                        alt={`Software ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {[
                    '/icons/Figma-logo.svg',
                    '/icons/Adobe_Photoshop_CC_icon (1).svg',
                    '/icons/Adobe_Illustrator_CC_icon.svg',
                    '/icons/Adobe_Indesign_CC_2026_icon.svg',
                    '/icons/cursor-ai-code-icon.webp',
                    '/icons/HTML5_logo_and_wordmark.svg.png',
                    '/icons/5968242.png',
                    '/icons/images.png',
                    '/icons/unnamed.png',
                  ].map((icon, index) => (
                    <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4 w-16 h-16 relative">
                      <Image
                        src={icon}
                        alt={`Software ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

