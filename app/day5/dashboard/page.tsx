 "use client";

import { useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function DashboardTasks() {
  const { data, error, mutate, isValidating } = useSWR("/api/tasks", fetcher);
  const [newTask, setNewTask] = useState("");
  const router = useRouter(); // Next.js router for navigation

  if (error) return <div>Error loading tasks</div>;
  if (!data) return <div>Loading...</div>;

  const addTask = async () => {
    if (!newTask) return;
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask }),
    });

    if (res.ok) {
      setNewTask("");
      mutate();
    } else {
      alert("Cannot add more than 10 tasks!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-black">Dashboard Tasks</h1>

      {/* Home Button */}
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-black text-white rounded mb-4"
      >
        Home
      </button>

      {/* Add Task */}
      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="border border-black p-2 rounded mr-2"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Add Task
        </button>
      </div>

      {/* Refresh Tasks */}
      <button
        className="px-4 py-2 bg-black text-white rounded mb-4"
        onClick={() => mutate()}
      >
        {isValidating ? "Refreshing..." : "Refresh Tasks"}
      </button>

      {/* Task List */}
      <ul className="space-y-2">
        {data.map((task: any) => (
          <li key={task.id} className="border border-black p-2 rounded text-black">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
