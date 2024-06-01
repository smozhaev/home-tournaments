import React, { createContext, useState, ReactNode } from "react";

const AppContext = createContext<any | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tournamentLink, setTournamentLink] = useState<string | null>(null);

  return <AppContext.Provider value={{ tournamentLink, setTournamentLink }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
