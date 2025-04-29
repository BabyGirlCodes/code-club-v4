
import { NextResponse } from 'next/server'
import { Client } from 'pg'
import { nanoid } from 'nanoid'

const client = new Client()

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

  try {
    await client.connect()

    // Check if email already exists
    const userCheck = await client.query('SELECT * FROM users WHERE email = $1', [email])
    if (userCheck.rows.length > 0) {
      return NextResponse.json({ error: 'Email is already registered' }, { status: 400 })
    }

    const userId = nanoid()

   
    await client.query(
      'INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)',
      [userId, name, email, password]
    )

    await client.end()
    return NextResponse.json({ message: 'User registered successfully' })
  } catch (error) {
    console.error(error)
    await client.end()
    return NextResponse.json({ error: 'Error registering user' }, { status: 500 })
  }
}
