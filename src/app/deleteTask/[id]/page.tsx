"use client";

import { useRouter, useParams } from "next/navigation";
import { getTodos, saveTodos } from "@/gateways/todo";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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

  const handleCancel = () => router.push("/task");

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xl p-6 w-full max-w-md animate-in fade-in zoom-in-95">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${notFound ? "bg-gray-100 dark:bg-gray-800" : "bg-red-100 dark:bg-red-900/30"}`}>
              {notFound ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 dark:text-red-400">
                  <path d="M10 11V6"></path>
                  <path d="M14 11V6"></path>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path>
                  <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              )}
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {notFound ? "Tâche introuvable" : "Supprimer la tâche ?"}
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-400">
            {notFound
              ? "La tâche que vous essayez de supprimer n'existe pas ou a déjà été supprimée."
              : `Êtes-vous sûr de vouloir supprimer définitivement "${title}" ? Cette action est irréversible.`}
          </p>

          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              onClick={handleCancel}
              className="border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {notFound ? "Retour" : "Annuler"}
            </Button>
            
            {!notFound && (
              <Button
                variant="destructive"
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
              >
                Supprimer
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}