export interface ITournamentPlaers {
  id: string;
  tournament: string;
  player_name: string;
  created: string;
  updated: string;
}
export type TUseGetPlayersReturn = [ITournamentPlaers[], boolean, (node?: Element | null | undefined) => void];
