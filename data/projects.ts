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
]


