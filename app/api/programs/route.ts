import { NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const programs = await prisma.program.findMany()
    return NextResponse.json(programs)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error fetching programs' }, { status: 500 })
  }
}
