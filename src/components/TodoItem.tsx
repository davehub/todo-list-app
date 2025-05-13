"use client";

import { ITodoItemProps } from "@/interfaces/todo";


export default function TodoItem({ todo, onToggle, onDelete }: ITodoItemProps) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3 rounded-xl shadow-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 group animate-fade-in"
    >
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer text-lg font-semibold transition-colors duration-200 select-none ${
          todo.completed ? "line-through text-gray-500" : "text-gray-200"
        }`}
        title={todo.completed ? "Marquer comme non terminée" : "Marquer comme terminée"}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold shadow-md hover:shadow-lg transition-transform duration-200 active:scale-95 focus:ring-2 focus:ring-red-300"
        title="Supprimer la tâche"
      >
        ✕
      </button>
    </div>
  );
}