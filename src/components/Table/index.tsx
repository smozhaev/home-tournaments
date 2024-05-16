import "./index.scss";
import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { Link } from "react-router-dom";

interface Tournament {
  id: number;
  tournamentName: string;
  game: string;
  location: string;
  availableSpots: number;
}

const LIMIT = 3;

const Table = () => {
  const [datas, setDatas] = useState<any>(null);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8090/api/collections/tournaments/records?page=${page}&perPage=${LIMIT}`,
        );
        if (!response.ok) {
          console.log("Error fetching data", error);
        }
        const jsonData = response.json();
        return await jsonData;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData(page).then((result) => {
      setDatas(result);
    });
  }, [page]);

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
          {!datas
            ? console.log("error")
            : datas.items.map((data: Tournament) => (
                <tr>
                  <td>{data.tournamentName}</td>
                  <td>{data.game}</td>
                  <td>{data.location}</td>
                  <td>{data.availableSpots}</td>
                  <td>
                    <Link to={`/tournament/${data.id}`}>Подробнее о турнире</Link>
                  </td>
                </tr>
              ))}
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
