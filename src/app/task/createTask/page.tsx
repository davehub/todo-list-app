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
      setError("Veuillez saisir un titre pour la tâche");
      return;
    }
    addTodo(title.trim(), completed);
    router.push("/task");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Carte avec ombre et bordure subtile */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20 backdrop-blur-sm">
          {/* En-tête avec dégradé coloré */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Créer une nouvelle tâche</h1>
              <p className="text-blue-100 mt-2">Ajoutez une tâche à votre liste</p>
            </div>
          </div>

          {/* Corps du formulaire */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Champ Titre */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Titre de la tâche <span className="text-red-500">*</span>
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setError("");
                  }}
                  placeholder="Ex: Préparer la réunion client"
                  className="w-full text-black px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all shadow-sm"
                  autoFocus
                />
              </div>

              {/* Champ Statut - Style carte */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${!completed ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input
                      type="radio"
                      checked={!completed}
                      onChange={() => setCompleted(false)}
                      className="hidden"
                    />
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${!completed ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}>
                        {!completed && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <span className={`font-medium ${!completed ? 'text-blue-600' : 'text-gray-600'}`}>En cours</span>
                    </div>
                  </label>
                  <label className={`flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${completed ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <input
                      type="radio"
                      checked={completed}
                      onChange={() => setCompleted(true)}
                      className="hidden"
                    />
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${completed ? 'border-green-500 bg-green-500' : 'border-gray-400'}`}>
                        {completed && <div className="w-2 h-2 rounded-full bg-white"></div>}
                      </div>
                      <span className={`font-medium ${completed ? 'text-green-600' : 'text-gray-600'}`}>Terminée</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  className="px-5 py-2.5 text-gray-700 font-medium rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors hover:shadow-sm"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium rounded-xl shadow-sm transition-all hover:shadow-md"
                >
                  Créer la tâche
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}