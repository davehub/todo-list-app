"use client";

import { useState } from "react";
import { ITodoFormProps } from "@/interfaces/todo";

export default function TodoForm({ onAdd }: ITodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() !== "") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6 w-full max-w-md animate-fade-in">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nouvelle tâche"
        className="w-full px-4 py-2 border border-blue-500 bg-gray-800 text-white rounded-md focus:ring-blue-300 focus:ring-offset-2 transition-all"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-md shadow-lg hover:shadow-xl transition-transform active:scale-95"
      >
        Ajouter
      </button>
    </form>
  );
}