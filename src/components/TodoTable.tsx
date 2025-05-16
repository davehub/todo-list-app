import { ITodo } from "@/interfaces/todo";
import { Button } from "@/components/ui/button";

interface TasksTableProps {
  todos: ITodo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TasksTable({
  todos,
  onEdit,
  onDelete,
}: TasksTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full bg-blue-300 text-gray-800 rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-gray-800">
            <th className="py-3 px-4 text-left">Titre</th>
            <th className="py-3 px-4 text-left">Statut</th>
            <th className="py-3 px-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center text-gray-400 py-6">
                Aucune tâche pour le moment.
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr
                key={todo.id}
                className="border-b-4 border-gray-800 hover:bg-black-800 transition-colors"
              >
                <td className="py-3 px-4 font-medium text-gray-800">
                  <span
                    className={
                      todo.completed ? "line-through text-gray-800" : ""
                    }
                  >
                    {todo.title}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      todo.completed ? "bg-indigo-700" : "bg-amber-900"
                    }`}
                  >
                    {todo.completed ? "Terminée" : "En cours"}
                  </span>
                </td>
                <td className="py-3 px-4 flex items-center justify-center gap-3">
                  <Button
                    variant="default"
                    onClick={() => onEdit(todo.id)}
                    className="text-xs text-gray-800 hover:text-blue-700 bg-blue-700  hover:bg-white"
                  >
                    Éditer
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => onDelete(todo.id)}
                    className="text-xs text-gray-800 hover:text-red-700 bg-red-700 hover:bg-white"
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
