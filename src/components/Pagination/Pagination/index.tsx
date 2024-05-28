import "./index.scss";
import { Link } from "react-router-dom";
import { ITournament, TUseGetTournaments } from "./type.ts";
import useGetTournaments from "../../../hooks/useGetTournaments";

const Table = () => {
  const [datas, page, setPage]: TUseGetTournaments = useGetTournaments();

  return (
    <div className={"table-container"}>
      <table>
        <thead>
          <tr>
            <th>Название турнира</th>
            <th>Игра</th>
            <th>Локация</th>
            <th>Свободные места</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {
            datas?.map((data: ITournament) => (
            <tr>
              <td>{data.tournamentName}</td>
              <td>{data.game}</td>
              <td>{data.location}</td>
              <td>{data.availableSpots}</td>
              <td>
                <Link to={`/tournaments/${data.id}`}>Подробнее о турнире</Link>
              </td>
            </tr>
          )) ?? console.log("error")}
        </tbody>
      </table>
      <div className={"pagination-buttons-container"}>
        <button
          onClick={() => {
            setPage((page) => page - 1);
          }}
        >
          Назад
        </button>
        <p className="pagination__page">{page}</p>
        <button
          onClick={() => {
            setPage((page) => page + 1);
          }}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};

export default Table;
