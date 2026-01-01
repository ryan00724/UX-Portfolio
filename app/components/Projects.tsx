'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects, Project } from '@/data/projects'
import ProjectCard from './ProjectCard'

type Category = 'all' | 'mobile' | 'web' | 'other'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'web', label: 'Web Projects' },
    { value: 'other', label: 'Other' },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            My Projects
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            A collection of mobile applications and projects I've worked on
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-black border-2 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-black text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

