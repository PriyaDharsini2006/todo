// src/app/api/todos/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'
import { z } from 'zod'

const TodoSchema = z.object({
  title: z.string().min(1),
  completed: z.boolean().optional(),
})

export async function GET() {
  try {
    const todos = await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(todos)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching todos' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const body = TodoSchema.parse(json)

    const todo = await prisma.todo.create({
      data: body,
    })

    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating todo' }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const json = await request.json()
    const { id, completed } = json

    const todo = await prisma.todo.update({
      where: { id },
      data: { completed },
    })

    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating todo' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 })
    }

    await prisma.todo.delete({
      where: { id },
    })

    return NextResponse.json({ message: 'Todo deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting todo' }, { status: 500 })
  }
}