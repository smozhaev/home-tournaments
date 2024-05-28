import { TableData, TRef } from "./type.ts";
import { useContext, useEffect } from "react";
import { AppContext } from "../../AppContext/AppContext.tsx";

interface IDynamicPagination {
  dataTournament: TableData[];
  loading: boolean;
  ref: TRef;
}

const DynamicPagination: React.FC<IDynamicPagination> = ({ dataTournament, loading, ref }) => {
  const { setTournamentDataForPDF, setLoadingPDF } = useContext(AppContext);
  useEffect(() => {
    setTournamentDataForPDF(dataTournament);
    setLoadingPDF(loading);
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
          {dataTournament?.map((tournament: TableData) => (
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
