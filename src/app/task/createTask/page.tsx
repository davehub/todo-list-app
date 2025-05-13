"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/gateways/todo";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Le titre de la tâche ne peut pas être vide");
      return;
    }
    addTodo(title.trim(), completed);
    router.push("/task");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
    {/* Effets de fond animés */}
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl animate-float1"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-float2"></div>
    </div>
  
    <div className="w-full max-w-md relative z-10">
      {/* Carte avec effet verre */}
      <div className="backdrop-blur-sm bg-gray-800/70 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Barre colorée en haut */}
        <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
        
        <div className="p-8">
          {/* Titre avec effet spécial */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-400">
                Nouvelle Tâche
              </span>
            </h1>
            <p className="text-gray-400">Organisez votre travail efficacement</p>
          </div>
  
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Champ Titre */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-300">Titre de la tâche</label>
              <div className="relative">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError("");
                  }}
                  placeholder="Que souhaitez-vous accomplir ?"
                  className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-500"
                  autoFocus
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
            </div>
  
            {/* Champ Statut */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-300">Statut</label>
              <div className="relative">
                <select
                  value={completed ? "completed" : "not completed"}
                  onChange={(e) => setCompleted(e.target.value === "completed")}
                  className="w-full px-4 py-3 bg-gray-700/80 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none transition-all"
                >
                  <option value="not completed">⏳ En cours</option>
                  <option value="completed">✅ Terminée</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
  
            {/* Message d'erreur */}
            {error && (
              <div className="flex items-center p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-400">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}
  
            {/* Boutons */}
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={() => router.push("/task")}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold rounded-lg shadow transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center group"
              >
                <svg className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center group"
              >
                Créer la tâche
                <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
  );
}