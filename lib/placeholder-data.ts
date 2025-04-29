// lib/placeholder-data.ts

// Define types for the data
export interface User {
    id: string
    name: string
    email: string
    password: string
  }
  
  export interface Program {
    id: string
    title: string
    description: string
    imageUrl: string
  }
  
  // Example of admin users
  export const adminUsers: User[] = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'Admin User',
      email: 'admin@codeclub.com',
      password: 'admin123',
    },
  ]
  
  // Example of programs offered by the Code Club
  export const programs: Program[] = [
    {
      id: '1',
      title: 'Scratch',
      description: 'Create animations, apps, and interactive stories by adding code, costumes, and sounds.',
      imageUrl: '/scratch.png',
    },
    {
      id: '2',
      title: 'Python',
      description: "Make digital art, games, and more while exploring one of the world's most popular programming languages.",
      imageUrl: '/python.png', // <- make sure this exists!
    },
    {
      id: '3',
      title: 'Java',
      description: 'Build websites and apps by learning HTML, CSS, and JavaScript.',
      imageUrl: '/web.png',
    },
  ]
  