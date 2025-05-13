import { ITodo } from "@/interfaces/todo";


interface TasksTableProps {
  todos: ITodo[];
  onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TasksTable({ todos, onEdit, onDelete }: TasksTableProps) {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 text-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="py-3 px-4 text-left font-semibold">Titre</th>
            <th className="py-3 px-4 text-left font-semibold">Statut</th>
            <th className="py-3 px-4 text-center font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center text-gray-500 py-8 text-lg">
                Aucune tâche pour le moment.
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr key={todo.id} className="border-b border-gray-700 hover:bg-gray-800 transition-all duration-300">
                <td className="py-3 px-4">
                  <span className={todo.completed ? "line-through text-gray-400" : "text-gray-200 font-medium"}>
                    {todo.title}
                  </span>
                </td>
                <td className="py-3 px-4">
                  {todo.completed ? (
                    <span className="px-2 py-1 rounded bg-green-600 text-white text-xs font-semibold">Terminée</span>
                  ) : (
                    <span className="px-2 py-1 rounded bg-yellow-500 text-white text-xs font-semibold">En cours</span>
                  )}
                </td>
                <td className="py-3 px-4 flex gap-3 justify-center">
                  <button
                    onClick={() => onEdit(todo.id)}
                    className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-400 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-transform duration-300 active:scale-95 focus:ring-2 focus:ring-blue-300"
                    title="Éditer"
                  >
                    Éditer
                  </button>
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="px-3 py-1 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-transform duration-300 active:scale-95 focus:ring-2 focus:ring-red-300"
                    title="Supprimer"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}