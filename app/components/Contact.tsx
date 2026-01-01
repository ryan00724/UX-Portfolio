'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'

const socialLinks = [
  {
    name: 'Email',
    icon: FiMail,
    href: 'mailto:your.email@example.com',
    color: 'hover:text-blue-600',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: FiGithub,
    href: 'https://github.com',
    color: 'hover:text-black',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    href: 'https://twitter.com',
    color: 'hover:text-blue-400',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-black mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 text-black transition-colors ${social.color}`}
                >
                  <Icon className="text-2xl" />
                  <span className="text-sm font-medium">{social.name}</span>
                </motion.a>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-xl font-semibold text-black mb-4">
              Send me a message
            </h3>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

