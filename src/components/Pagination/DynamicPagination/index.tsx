import { useParams } from "react-router-dom";
import { ITournament, TUseGetPlayersReturn } from "./type.ts";
import useGetPlayers from "../../../hooks/useGetPlayers";

const DynamicPagination = () => {
  const { id } = useParams();
  const [dataTournament, loading, ref]: TUseGetPlayersReturn = useGetPlayers(id);

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
          {dataTournament?.map((tournament: ITournament) => (
            <tr>
              <td>{tournament.player_name}</td>
              <td>{tournament.created}</td>
            </tr>
          ))}
          {!loading && <div className={"observer"} ref={ref}></div>}
          {loading && <div>Загрузка...</div>}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicPagination;
