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
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Gestion des Tâches</h1>
        <p className="text-gray-600 mb-6">
          {todos.length} {todos.length > 1 ? "tâches" : "tâche"} enregistrée{todos.length > 1 ? "s" : ""}
        </p>

        <button
          onClick={() => router.push("task/createTask")}
          className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition"
        >
          + Nouvelle tâche
        </button>

        <div className="mt-8 bg-white rounded-lg shadow-md p-4">
          <TasksTable todos={todos} onEdit={handleEdit} onDelete={handleDelete} className="w-full" />

          {todos.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-lg font-medium text-gray-700">Aucune tâche enregistrée</h3>
              <p className="text-gray-500">Commencez par créer votre première tâche</p>
              <button
                onClick={() => router.push("task/createTask")}
                className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Créer une tâche
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-500">Tâches complétées</h3>
            <p className="text-2xl font-bold text-gray-800">
              {todos.filter((todo) => todo.completed).length} / {todos.length}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-medium text-gray-500">En attente</h3>
            <p className="text-2xl font-bold text-gray-800">
              {todos.filter((todo) => !todo.completed).length}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
