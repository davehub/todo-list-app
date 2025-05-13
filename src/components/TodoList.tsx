"use client"
import React from 'react'



const TodoList = () => {
    const [title, setTitle] = React.useState<string>("")
    const [todos, setTodos] = React.useState<{ id: string; title: string; completed: boolean }[]>([])
    function handleAddTodo(): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">Liste de tâches</h1>
      <form onSubmit={handleAddTodo} className="flex gap-4 mb-6 w-full max-w-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ajouter une tâche..."
          className="w-full px-4 py-2 border border-emerald-500 bg-gray-800 text-white rounded-md focus:ring-emerald-300 transition-all"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-md shadow-lg hover:scale-105 transition-all"
        >
          Ajouter
        </button>
      </form>

      <ul className="w-full max-w-md space-y-4">
        {todos.length === 0 ? (
          <li className="text-gray-400 text-center text-lg">Aucune tâche pour le moment.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t))}
                  className="h-5 w-5 text-emerald-500 focus:ring-emerald-300 transition-all"
                />
                <span className={todo.completed ? "line-through text-gray-500" : "text-gray-200 font-medium"}>
                  {todo.title}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setTodos(todos.map(t => t.id === todo.id ? { ...t, title: prompt("Modifier la tâche", todo.title) || todo.title } : t))}
                  className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-md transition-all"
                >
                  Modifier
                </button>
                <button
                  onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}
                  className="px-3 py-1 rounded bg-red-600 hover:bg-red-500 text-white font-semibold shadow-md transition-all"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );

}

export default TodoList
