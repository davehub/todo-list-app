"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ITodo } from "@/interfaces/todo";
import { getTodos } from "@/gateways/todo";
import TasksTable from "@/components/TodoTable";

export interface TasksTableProps {
  todos: ITodo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  className?: string;
}

export default function TaskPage() {
  const [todos, setTodos] = useState<ITodo[]>(getTodos());

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  const router = useRouter();

  const handleEdit = (id: number) => {
    router.push(`/editTask/${id}`);
  };

  const handleDelete = (id: number) => {
    router.push(`/deleteTask/${id}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header sobre */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Gestion des Tâches
            </h1>
            <p className="text-gray-600 mt-2">
              {todos.length} {todos.length > 1 ? "tâches" : "tâche"} enregistrée
              {todos.length > 1 ? "s" : ""}
            </p>
          </div>

          <button
            onClick={() => router.push("task/createTask")}
            className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-gray-800 font-medium rounded-lg shadow transition-colors duration-300 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Nouvelle tâche
          </button>
        </div>

        {/* Zone de tableau moderne */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <TasksTable
              todos={todos}
              onEdit={handleEdit}
              onDelete={handleDelete}
              className="min-w-full divide-y divide-gray-200"
            />
          </div>

          {/* Pied de tableau utile */}
          {todos.length === 0 && (
            <div className="p-8 text-center bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                Aucune tâche enregistrée
              </h3>
              <p className="mt-2 text-gray-500">
                Commencez par créer votre première tâche
              </p>
              <button
                onClick={() => router.push("task/createTask")}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-gray-800 text-sm font-medium rounded-md shadow transition-colors duration-300"
              >
                Créer une tâche
              </button>
            </div>
          )}
        </div>

        {/* Statistiques rapides (optionnel) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">
              Tâches complétées
            </h3>
            <p className="mt-1 text-2xl font-semibold text-gray-800">
              {todos.filter((todo) => todo.completed).length}
              <span className="text-sm text-gray-500 ml-1">
                / {todos.length}
              </span>
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">En attente</h3>
            <p className="mt-1 text-2xl font-semibold text-gray-800">
              {todos.filter((todo) => !todo.completed).length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
