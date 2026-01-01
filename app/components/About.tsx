'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'Product Design', icon: '🎨' },
  { name: 'UX Strategy', icon: '💡' },
  { name: 'Prototyping', icon: '⚡' },
  { name: 'Architecture', icon: '🏗️' },
  { name: 'Collaboration', icon: '🤝' },
]

const experiences = [
  {
    title: 'Product Design Lead',
    company: 'Tech Innovation',
    description: 'Led design strategy and execution for innovative mobile solutions, delivering user-centered experiences.',
    year: '2020 - Present',
  },
  {
    title: 'UX Workshop Facilitator',
    company: 'Design Conference',
    description: 'Conducted interactive design workshops, teaching design thinking to 200+ participants.',
    year: '2019 - 2023',
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
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-black mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-black">{exp.title}</h4>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                  {index < experiences.length - 1 && (
                    <div className="border-t border-gray-100 pt-6" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center Card - Personal Info & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <div className="space-y-1 mb-2">
                <p className="text-xs text-gray-500">DESIGNER • 10+ YEARS • PRODUCT</p>
                <h3 className="text-2xl font-bold text-black">Ryan Creary</h3>
                <p className="text-sm text-gray-600">Product & UX Designer</p>
              </div>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6 text-center">
              With over a decade of design experience, I lead strategy and execution to deliver innovative solutions globally.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-black mb-3">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-full text-xs font-medium transition-colors cursor-pointer"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Two Stacked Cards */}
          <div className="flex flex-col justify-between h-full">
            {/* First Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mb-3"
            >
              <h3 className="text-xl font-semibold text-black mb-6">
                Achievements
              </h3>
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-black text-sm mb-1">
                      {achievements[0].title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {achievements[0].description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 ml-4 whitespace-nowrap">
                    {achievements[0].stat}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Second Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-black mb-6">
                Research
              </h3>
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-black text-sm mb-1">
                      {achievements[1].title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {achievements[1].description}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 ml-4 whitespace-nowrap">
                    {achievements[1].stat}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

