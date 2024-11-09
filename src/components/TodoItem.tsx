interface TodoItemProps {
    id: string
    title: string
    completed: boolean
    onDelete: (id: string) => void
    onToggle: (id: string, completed: boolean) => void
  }
  
  export function TodoItem({ id, title, completed, onDelete, onToggle }: TodoItemProps) {
    return (
      <div className="flex items-center gap-2 p-4 bg-white rounded-lg shadow">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onToggle(id, e.target.checked)}
            className="w-5 h-5 border-2 rounded-md focus:ring-blue-500"
            aria-label={`Mark "${title}" as ${completed ? 'incomplete' : 'complete'}`}
          />
          <span className={`flex-1 ${completed ? 'line-through text-gray-500' : ''}`}>
            {title}
          </span>
        </label>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label={`Delete "${title}"`}
        >
          Delete
        </button>
      </div>
    )
  }