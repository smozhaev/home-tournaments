export interface ITournament {
  id: string;
  tournament: string;
  player_name: string;
  created: string;
  updated: string;
}

export type TGetPlayers = [ITournament[], boolean, (node?: Element | null | undefined) => void];
