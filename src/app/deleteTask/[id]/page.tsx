"use client";

import { useRouter, useParams } from "next/navigation";
import { getTodos, saveTodos } from "@/gateways/todo";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
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
    <main className="min-h-screen flex items-center justify-center bg-white p-4">
      <Dialog open>
        <DialogContent className="bg-white rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-red-500">
              {notFound ? "Tâche introuvable" : "Confirmation de suppression"}
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-300 mb-4">
            {notFound
              ? "La tâche que vous recherchez n'existe pas ou a été supprimée."
              : `Voulez-vous vraiment supprimer cette tâche : "${title}" ?`}
          </p>
          <DialogFooter className="flex justify-end gap-4">
            <Button variant="ghost" onClick={handleCancel}>
              {notFound ? "Retour à la liste" : "Non"}
            </Button>
            {!notFound && (
              <Button variant="destructive" onClick={handleDelete}>
                Oui
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
