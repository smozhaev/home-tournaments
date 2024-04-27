import "./index.scss";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const pb = new PocketBase("http://127.0.0.1:8090");

interface Tournament {
  id: number;
  tournamentName: string;
  game: string;
  location: string;
  availableSpots: number;
}

const Table = () => {
  const [datas, setDatas] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8090/api/collections/tournaments/records");
        if (!response.ok) {
          console.log("Error fetching data", error);
        }
        const jsonData = response.json();
        return await jsonData;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData().then((result) => {
      setDatas(result);
    });
    console.log(datas);
  });

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
                    <button className="join-btn">Принять участие</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
