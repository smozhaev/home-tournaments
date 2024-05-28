import React, { createContext, useState, ReactNode } from "react";
import { ITournamentDataForPDF } from "./type.ts";

const AppContext = createContext<any | undefined>(undefined);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tournamentDataForPDF, setTournamentDataForPDF] = useState<ITournamentDataForPDF[]>([]);
  const [loadingPDF, setLoadingPDF] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ tournamentDataForPDF, setTournamentDataForPDF, loadingPDF, setLoadingPDF }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
