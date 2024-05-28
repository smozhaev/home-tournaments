import { useParams } from "react-router-dom";
import { ITournamentPlaers, TUseGetPlayersReturn } from "./type.ts";
import useGetPlayers from "../../../hooks/useGetPlayers";
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext/AppContext.tsx";

const DynamicPagination = () => {
  const { id } = useParams();
  const [dataTournament, loading, ref]: TUseGetPlayersReturn = useGetPlayers(id);
  const { setTournamentDataForPDF } = useContext(AppContext);

  useEffect(() => {
    setTournamentDataForPDF(dataTournament);
  }, [dataTournament]);

  return (
    <div className={"table-container"}>
      <table>
        <thead>
          <tr>
            <th>имя игрока</th>
            <th>записан</th>
          </tr>
        </thead>
        <tbody className={"table-body"}>
          {dataTournament?.map((tournament: ITournamentPlaers) => (
            <tr>
              <td>{tournament.player_name}</td>
              <td>{tournament.created}</td>
            </tr>
          ))}
          {!loading && <div className={"observer"} ref={ref}></div>}
          {loading && (
            <div className={"loader"}>
              <div className={"loader-animation"}></div>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicPagination;
