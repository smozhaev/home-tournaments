import "../../components/Pagination/DynamicPagination/index.scss";
import DynamicPagination from "../../components/Pagination/DynamicPagination";
import ButtonSaveAsPDF from "../../components/Buttons/ButtonSaveAsPDF";
import { useParams } from "react-router-dom";
import useGetPlayers from "../../hooks/useGetPlayers";
import { TUseGetPlayersReturn } from "./type.ts";

const TournamentInfo = () => {
  const { id } = useParams();
  const [dataTournament, loading, ref]: TUseGetPlayersReturn = useGetPlayers(id);

  return (
    <div>
      <h1>Tournament</h1>
      {dataTournament.length !== 0 ? (
        <>
          <DynamicPagination dataTournament={dataTournament} loading={loading} ref={ref} />
          <ButtonSaveAsPDF />
        </>
      ) : (
        <div>Пока что в этом турнире нету участников</div>
      )}
    </div>
  );
};

export default TournamentInfo;
