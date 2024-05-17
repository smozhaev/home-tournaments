import React from "react";

export interface ITournament {
  id: number;
  tournamentName: string;
  game: string;
  location: string;
  availableSpots: number;
}

export type TUseGetTournaments = [ITournament[], number, React.Dispatch<React.SetStateAction<number>>];
