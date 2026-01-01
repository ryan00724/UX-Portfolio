export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 text-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#home"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

