'use client';

import Link from 'next/link';

export default function HomePage() {
  const tasks = [
    { name: 'Day 1: Setup & Basics', href: '/day1' },
    { name: 'Day 2: Sidebar & Navbar Layout', href: '/day2' },
    { name: 'Day 3: Data Fetching', href: '/day3' },
    { name: 'Day 4: API Routes', href: '/day4' },
    { name: 'Day 5,6: Authentication & State Management', href: '/day5' },
    { name: 'Day 7: Charts & Visualization', href: '/day7' },
    { name: 'Day 8: Advanced UI Components', href: '/day8' },
    { name: 'Day 9:performance & deployement', href: '/day9' }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-black">
      <h1 className="text-4xl font-bold text-center mb-12">Task List</h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {tasks.map((task, idx) => (
          <Link
            key={idx}
            href={task.href}
            className="
              p-6
              bg-white
              rounded-xl
              shadow-md
              hover:shadow-lg
              hover:bg-gray-100
              transition
              transform
              hover:-translate-y-1
              cursor-pointer
              flex
              items-center
              justify-center
              text-black
              font-semibold
              text-center
            "
          >
            {task.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
