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

    className?: string; // Add className as an optional property

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
        <main className="p-8 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
  {/* Effets de fond dynamiques */}
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl animate-float1"></div>
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-float2"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Header avec effets spéciaux */}
    <div className="text-center mb-10">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 animate-text-pulse">
          Ma Liste des Tâches
        </span>
      </h1>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={() => router.push("task/createTask")}
          className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 group flex items-center justify-center"
        >
          <span className="mr-2">➕</span>
          <span>Créer une nouvelle tâche</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>

    {/* Zone des tâches avec effet de carte moderne */}
    <div className="mt-10 backdrop-blur-sm bg-gray-800/50 rounded-2xl shadow-2xl overflow-hidden border border-gray-700/50 animate-fade-in-up">
      <div className="p-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10">
        <TasksTable 
          todos={todos} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
          className="bg-gray-800/70"
        />
      </div>
    </div>
  </div>
</main>
    );
}


