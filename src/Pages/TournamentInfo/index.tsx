import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../components/AppContext/AppContext.tsx";
import "./index.scss";

const TournamentInfo = () => {
  const context = useContext(AppContext);
  const { tournamentLink } = context;
  const [dataTournament, setDataTournament] = useState<any>(null);
  useEffect(() => {
    const fetchTournament = async (token: string) => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8090/api/collections/players/records?filter=(tournament=%27${token}%27)`,
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
    fetchTournament(tournamentLink).then((result) => {
      setDataTournament(result);
    });
  }, []);
  const xd = () => {
    console.log(dataTournament.items);
  };
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
          <tbody>
            {!dataTournament
              ? console.log("error")
              : dataTournament.items.map((tournament) => (
                  <tr>
                    <td>{tournament.player_name}</td>
                    <td>{tournament.created}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <button onClick={xd}>xd</button>
    </>
  );
};

export default TournamentInfo;
