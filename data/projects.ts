export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  category: 'mobile' | 'web' | 'other'
  links: {
    demo?: string
    github?: string
    appStore?: string
    playStore?: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Tradish - Your Ethnic Food Companion',
    description:
      'Discover, track, and cook traditional recipes from around the world with Tradish. Whether you want to reconnect with your cultural roots, try something new, or improve your cooking skills, Tradish makes discovering authentic ethnic recipes simple and enjoyable.',
    longDescription:
      'This mobile app was built using React Native and features a modern UI/UX design. It includes features like real-time synchronization, offline mode, and push notifications.',
    image: '/projects/Tradish/Tradish Mockups.png',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    category: 'mobile',
    links: {
      appStore: 'https://apps.apple.com/gb/app/tradish/id6747819690',
      github: 'https://github.com',
    },
  },
  {
    id: '2',
    title: 'Mobile App Example 2',
    description:
      'An elegant mobile solution for productivity and task management with seamless cross-platform synchronization.',
    longDescription:
      'Built with Flutter, this app provides a beautiful and performant experience across iOS and Android platforms.',
    image: '/images/project2.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Provider'],
    category: 'mobile',
    links: {
      appStore: 'https://apps.apple.com',
      playStore: 'https://play.google.com',
      demo: 'https://example.com',
    },
  },
  {
    id: '3',
    title: 'Web Project Example',
    description:
      'A responsive web application built with modern technologies and best practices.',
    longDescription:
      'This web application showcases modern frontend development practices with Next.js, TypeScript, and Tailwind CSS.',
    image: '/images/project3.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    category: 'web',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    id: '4',
    title: 'Mobile App Example 3',
    description:
      'A native iOS application with stunning animations and smooth performance.',
    longDescription:
      'Developed using Swift and SwiftUI, this app demonstrates native iOS development capabilities.',
    image: '/images/project4.jpg',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'Combine'],
    category: 'mobile',
    links: {
      appStore: 'https://apps.apple.com',
      github: 'https://github.com',
    },
  },
]


