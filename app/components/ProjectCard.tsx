'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiExternalLink } from 'react-icons/fi'
import { FaAppStore } from 'react-icons/fa'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      {/* Image Section */}
      <div className="relative w-full h-96 bg-gray-200 overflow-hidden rounded-lg mb-4">
        {!imageError ? (
          <div className="absolute inset-0 will-change-transform">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onError={() => setImageError(true)}
              loading={index === 0 ? 'eager' : 'lazy'}
              priority={index === 0}
              quality={75}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Text Section - Underneath image */}
      <div>
        <h3 className="text-xl font-semibold text-black mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Case Study Button */}
          <a
            href={project.links.demo || '#'}
            target={project.links.demo && project.links.demo.startsWith('http') ? '_blank' : '_self'}
            rel={project.links.demo && project.links.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-gray-800 active:scale-95"
            aria-label={`View ${project.title} case study`}
          >
            <FiExternalLink className="text-base" />
            Case Study
          </a>
          
          {/* App Store Button */}
          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:bg-gray-800 active:scale-95"
              aria-label={`View ${project.title} on App Store`}
            >
              <FaAppStore className="text-base" />
              App Store
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

