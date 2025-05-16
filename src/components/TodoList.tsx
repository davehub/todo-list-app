"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@/components/ui/button";

const TodoList = () => {
  const [title, setTitle] = React.useState<string>("");
  const [todos, setTodos] = React.useState<{ id: string; title: string; completed: boolean }[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = { id: uuidv4(), title: title.trim(), completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodo = (id: string) => {
    const newTitle = prompt("Modifier la tâche")?.trim();
    if (newTitle) {
      setTodos((prev) => prev.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo));
    }
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-emerald-400 mb-6">Liste de tâches</h1>
      <form onSubmit={handleAddTodo} className="flex gap-4 mb-6 w-full max-w-md">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ajouter une tâche..."
          className="w-full px-4 py-2 border border-emerald-500 bg-gray-800 text-white rounded-md focus:ring-emerald-300 transition-all"
        />
        <Button type="submit" className="bg-emerald-600">Ajouter</Button>
      </form>

      <ul className="w-full max-w-md space-y-4">
        {todos.length === 0 ? (
          <li className="text-gray-400 text-center text-lg">Aucune tâche pour le moment.</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="h-5 w-5 text-emerald-500 focus:ring-emerald-300"
                />
                <span className={todo.completed ? "line-through text-gray-500" : "text-gray-200 font-medium"}>{todo.title}</span>
              </div>
              <div className="flex gap-2">
                <Button variant="default" onClick={() => editTodo(todo.id)}>Modifier</Button>
                <Button variant="destructive" onClick={() => deleteTodo(todo.id)}>Supprimer</Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
