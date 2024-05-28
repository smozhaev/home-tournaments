import "../../components/Pagination/DynamicPagination/index.scss";
import DynamicPagination from "../../components/Pagination/DynamicPagination";
import ButtonSaveAsPDF from "../../components/Buttons/ButtonSaveAsPDF";

const TournamentInfo = () => {
  return (
    <div>
      <h1>Tournament</h1>
      <DynamicPagination />
      <ButtonSaveAsPDF />
    </div>
  );
};

export default TournamentInfo;
