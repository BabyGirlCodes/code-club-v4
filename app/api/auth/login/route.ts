// app/api/auth/login/route.ts
import { NextResponse } from 'next/server'
import { Client } from 'pg'

const client = new Client()

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
  }

  try {
    await client.connect()

    // Get user from the database
    const userResult = await client.query('SELECT * FROM users WHERE email = $1', [email])
    const user = userResult.rows[0]

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    // Check if the passwords match (plain text comparison)
    if (user.password !== password) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    await client.end()
    return NextResponse.json({ message: 'Login successful' })
  } catch (error) {
    console.error(error)
    await client.end()
    return NextResponse.json({ error: 'Error logging in user' }, { status: 500 })
  }
}
