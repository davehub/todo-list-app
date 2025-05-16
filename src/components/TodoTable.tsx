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
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Titre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Statut
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {todos.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="px-6 py-4 text-center text-gray-500 italic"
              >
                Aucune tâche pour le moment.
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr
                key={todo.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span
                      className={`text-sm font-medium ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-900"
                      }`}
                    >
                      {todo.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      todo.completed
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {todo.completed ? "Terminée" : "En cours"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="default"
                      onClick={() => onEdit(todo.id)}
                      className="text-indigo-600 hover:text-indigo-900 border-indigo-200 hover:bg-indigo-50"
                    >
                      Éditer
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => onDelete(todo.id)}
                      className="text-red-600 hover:text-red-900 border-red-200 hover:bg-red-50"
                    >
                      Supprimer
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}