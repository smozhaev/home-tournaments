import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./index.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
interface ITournament {
  id: string;
  tournament: string;
  player_name: string;
  created: string;
  updated: string;
}

const LIMIT = 10;

const TournamentInfo = () => {
  // const context = useContext(AppContext);
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [dataTournament, setDataTournament] = useState<ITournament[]>([]);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  const fetchTournament = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://127.0.0.1:8090/api/collections/players/records?filter=(tournament=%27${id}%27)&page=${page}&perPage=${LIMIT}`,
      );
      setDataTournament((prev) => [...prev, ...data.items]);
    } catch (error) {
      console.log("Error fetching univer...", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void fetchTournament();
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      console.log("view");
    }
  }, [inView]);

  return (
    <>
      <h1>Tournament</h1>
      <div className={"table-container"}>
        <table>
          <thead>
            <tr>
              <th>имя игрока</th>
              <th>записан</th>
            </tr>
          </thead>
          <tbody className={"table-body"}>
            {console.log(dataTournament)}
            {dataTournament?.map((tournament: ITournament) => (
              <tr>
                <td>{tournament.player_name}</td>
                <td>{tournament.created}</td>
              </tr>
            ))}
            {loading && <div>Загрузка...</div>}
            {!loading && <div className={"observer"} ref={ref}></div>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TournamentInfo;
