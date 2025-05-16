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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Tâche introuvable</h2>
          <p className="text-gray-600 mb-6">La tâche que vous essayez de modifier n&#39;existe pas ou a été supprimée.</p>
          <button
            onClick={() => router.push("/task")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          {/* En-tête avec bordure colorée */}
          <div className="border-t-4 border-blue-600 p-6">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Modifier la tâche</h1>
              <p className="text-gray-600 mt-1">Mettez à jour les détails de votre tâche</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Champ Titre */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Titre de la tâche *
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  autoFocus
                />
              </div>

              {/* Champ Statut */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={!completed}
                      onChange={() => setCompleted(false)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">in progress</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      checked={completed}
                      onChange={() => setCompleted(true)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">completed</span>
                  </label>
                </div>
              </div>

              {/* Message d'erreur */}
              {error && (
                <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-100 flex items-start">
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
                  className="px-4 py-2 text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enregistrer les modifications
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}