 // app/day5/layout.tsx
"use client";

import { SessionProvider } from "next-auth/react";

export default function Day5Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-white text-black">
        {/* Optional Header */}
        <header className="bg-white border-b border-black p-4">
          <h1 className="text-xl font-bold text-black">Day 5 Dashboard</h1>
        </header>

        {/* Main content area */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </SessionProvider>
  );
}
