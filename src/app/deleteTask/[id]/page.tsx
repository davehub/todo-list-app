"use client";

import { useRouter, useParams } from "next/navigation";
import { getTodos, saveTodos } from "@/gateways/todo";
import { useEffect, useState } from "react";


export default function DeleteTaskPage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  const [notFound, setNotFound] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const todos = getTodos();
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      setNotFound(true);
      return;
    }
    setTitle(todo.title);
  }, [id]);

  const handleDelete = () => {
    const todos = getTodos();
    const filtered = todos.filter((t) => t.id !== id);
    saveTodos(filtered);
    router.push("/task");
  };

  const handleCancel = () => {
    router.push("/task");
  };

  if (notFound) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 relative overflow-hidden">
      {/* Effets de fond animés */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl animate-float2"></div>
      </div>
    
      {/* Carte principale */}
      <div className="w-full max-w-md relative z-10 backdrop-blur-sm bg-gray-800/70 border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up p-8 text-center">
        {/* Icône d'erreur animée */}
        <div className="mx-auto mb-6 w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
          <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
    
        {/* Titre et message */}
        <h1 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-500">
          Tâche introuvable
        </h1>
        <p className="text-gray-300 mb-8">
          La tâche que vous recherchez n&apos;existe pas ou a été supprimée.
        </p>
    
        {/* Bouton avec effet */}
        <button
          onClick={handleCancel}
          className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à la liste
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
    
        {/* Option supplémentaire */}
        <div className="mt-6 text-sm text-gray-400">
          Ou <a href="/task/create" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">créez une nouvelle tâche</a>
        </div>
      </div>
    </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl p-8 text-center animate-fade-in-up">
        <h1 className="text-xl font-bold text-red-500 mb-4">Confirmation de suppression</h1>
        <p className="mb-6 text-base text-gray-300">Voulez-vous vraiment supprimer cette tâche&nbsp;?</p>
        <div className="mb-6 font-semibold text-red-400">{title}</div>
        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-transform active:scale-95"
            onClick={handleCancel}
          >
            Non
          </button>
          <button
            className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold shadow-md hover:shadow-lg transition-transform active:scale-95"
            onClick={handleDelete}
          >
            Oui
          </button>
        </div>
      </div>
    </main>
  );
}