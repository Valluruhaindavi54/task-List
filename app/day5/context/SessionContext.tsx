"use client";

import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const SessionContext = createContext<any>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(session?.user || null);

  useEffect(() => {
    setUser(session?.user || null);
  }, [session]);

  return (
    <SessionContext.Provider value={{ user, loading: status === "loading" }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSessionContext = () => useContext(SessionContext);
