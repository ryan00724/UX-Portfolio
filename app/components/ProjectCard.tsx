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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 aspect-[4/5] group"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-gray-200">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        {/* Top Section - Title and Description */}
        <div className="flex-1 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-white/90 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom Section - Call to Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          {/* Case Study Button */}
          <a
            href={project.links.demo || '#'}
            target={project.links.demo ? '_blank' : '_self'}
            rel={project.links.demo ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
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
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
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

