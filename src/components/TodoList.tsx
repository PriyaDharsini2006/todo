'use client'
import { useEffect, useState } from 'react'
import { TodoItem } from './TodoItem'
import { AddTodo } from './AddTodo'
import { toast } from 'react-hot-toast'

interface Todo {
  id: string
  title: string
  completed: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos')
      if (!res.ok) throw new Error('Failed to fetch todos')
      const data = await res.json()
      setTodos(data)
    } catch (error) {
      toast.error('Failed to fetch todos')
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/todos?id=${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Failed to delete todo')
      fetchTodos()
      toast.success('Todo deleted!')
    } catch (error) {
      toast.error('Failed to delete todo')
    }
  }

  const handleToggle = async (id: string, completed: boolean) => {
    try {
      const res = await fetch('/api/todos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, completed }),
      })
      if (!res.ok) throw new Error('Failed to update todo')
      fetchTodos()
    } catch (error) {
      toast.error('Failed to update todo')
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-black text-center mb-8">Todo List</h1>
      <AddTodo onAdd={fetchTodos} />
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  )
}