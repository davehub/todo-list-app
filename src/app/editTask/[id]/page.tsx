"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { getTodos, saveTodos } from "@/gateways/todo";

export default function EditTask() {
  const params = useParams();
  const id = Number(params.id);
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const todos = getTodos();
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      setNotFound(true);
      return;
    }
    setTitle(todo.title);
    setCompleted(todo.completed);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Veuillez saisir un titre pour la tâche");
      return;
    }
    const todos = getTodos();
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
      todos[idx] = { ...todos[idx], title, completed };
      saveTodos(todos);
    }
    router.push("/task");
  };

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="text-center p-8 max-w-md bg-white rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-pink-100 mb-6 shadow-inner">
            <svg className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Tâche introuvable</h2>
          <p className="text-gray-600 mb-8">La tâche que vous essayez de modifier n&#39;existe pas ou a été supprimée.</p>
          <button
            onClick={() => router.push("/task")}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20 backdrop-blur-sm">
          {/* En-tête avec dégradé */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
            <div className="text-center mb-2">
              <h1 className="text-2xl font-bold">Modifier la tâche</h1>
              <p className="text-blue-100 mt-1">Mettez à jour les détails de votre tâche</p>
            </div>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  placeholder="Ex: Finaliser le rapport trimestriel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all shadow-sm"
                  autoFocus
                />
              </div>

              {/* Champ Statut */}
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
              <div className="flex justify-between pt-2">
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
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}