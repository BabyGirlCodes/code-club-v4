import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const programs = [
      {
        id: 1,
        title: 'Scratch',
        description: 'Create animations, apps, and interactive stories by adding code, costumes, and sounds.',
        imageUrl: '/scratch.png'
      },
      {
        id: 2,
        title: 'Python',
        description: "Make digital art, games, and more while exploring one of the world's most popular programming languages.",
        imageUrl: '/python.png' // <- make sure this exists!
      },
      {
        id: 3,
        title: 'Java',
        description: 'Build websites and apps by learning HTML, CSS and JavaScript.',
        imageUrl: '/web.png' 
      },
    ]

    return NextResponse.json(programs)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching programs' }, { status: 500 })
  }
}
