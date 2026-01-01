'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink, FiSmartphone } from 'react-icons/fi'
import { FaAppStore, FaGooglePlay } from 'react-icons/fa'
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
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <div className="relative h-48 sm:h-56 w-full bg-gray-200 overflow-hidden">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
            <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
        )}
        {project.category === 'mobile' && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
            <FiSmartphone />
            Mobile
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2">
          {project.title}
        </h3>
        <p className="text-black mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-black text-xs rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors text-sm font-medium"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FiGithub className="text-lg" />
              <span className="hidden sm:inline">Code</span>
            </a>
          )}
          {project.links.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors text-sm font-medium"
              aria-label={`View ${project.title} on App Store`}
            >
              <FaAppStore className="text-lg" />
              <span className="hidden sm:inline">App Store</span>
            </a>
          )}
          {project.links.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors text-sm font-medium"
              aria-label={`View ${project.title} on Play Store`}
            >
              <FaGooglePlay className="text-lg" />
              <span className="hidden sm:inline">Play Store</span>
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors text-sm font-medium"
              aria-label={`View ${project.title} demo`}
            >
              <FiExternalLink className="text-lg" />
              <span className="hidden sm:inline">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

