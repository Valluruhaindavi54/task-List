 import { NextRequest, NextResponse } from "next/server";

let tasks = [
  { id: 1, title: "Day 1 Task" },
  { id: 2, title: "Day 2 Task" },
  { id: 3, title: "Day 3 Task" },
  { id: 4, title: "Day 4 Task" },
  { id: 5, title: "Day 5 Task" },
];

// GET — return all tasks
export async function GET(req: NextRequest) {
  return NextResponse.json(tasks);
}

// POST — add a new task (up to 10 max)
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (tasks.length >= 5) {
    return NextResponse.json({ message: "Max 10 tasks allowed" }, { status: 400 });
  }

  const newTask = { id: tasks.length + 1, title: body.title };
  tasks.push(newTask);

  return NextResponse.json({ message: "Task added", task: newTask });
}
