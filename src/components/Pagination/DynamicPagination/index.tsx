import { useParams } from "react-router-dom";
import { ITournament, TUseGetPlayersReturn } from "./type.ts";
import useGetPlayers from "../../../hooks/useGetPlayers";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../MyDocument";

const DynamicPagination = () => {
  const { id } = useParams();
  const [dataTournament, loading, ref]: TUseGetPlayersReturn = useGetPlayers(id);

  // const handleDownload = async () => {
  //   try {
  //     const instance = ReactPDF.pdf(<MyDocument data={dataTournament} />);
  //     const buffer = await instance.toBuffer();
  //     const blob = new Blob([buffer], { type: "application/pdf" });
  //     console.log(4, blob);
  //     saveAs(blob, "example.pdf");
  //   } catch (error) {
  //     console.error("Error generating or downloading PDF:", error);
  //   }
  // };

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
      <button>
        <PDFDownloadLink document={<MyDocument data={dataTournament} />} fileName="somename.pdf">
          {({ loading }) => (loading ? "Loading document..." : "Download now!")}
        </PDFDownloadLink>
      </button>
    </div>
  );
};

export default DynamicPagination;
