// src/app/page.tsx
import { TodoList } from '@/components/TodoList'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <Toaster position="bottom-right" />
      <TodoList />
    </main>
  )
}