import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const events = [
      {
        id: 1,
        title: 'Open House',
        date: '2025-03-15',
        description: 'Tour our campus, meet faculty, and learn about our programs for prospective families.',
      },
      {
        id: 2,
        title: 'Science Fair',
        date: '2025-04-05',
        description: 'Students showcase their innovative science projects to the community.',
      },
      {
        id: 3,
        title: 'Spring Concert',
        date: '2025-04-22',
        description: 'Join us for an evening of music performed by our talented student musicians.',
      },
    ]

    return NextResponse.json(events)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching events' }, { status: 500 })
  }
}

