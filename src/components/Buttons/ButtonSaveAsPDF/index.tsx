import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../../MyDocument";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext.tsx";
import "./index.scss";

const ButtonSaveAsPDF: React.FC = () => {
  const { tournamentDataForPDF, loadingPDF } = useContext(AppContext);
  return (
    <button className={"button-pdf"}>
      <PDFDownloadLink document={<MyDocument data={tournamentDataForPDF} />} fileName="somename.pdf">
        {() => (!loadingPDF ? "Loading doc..." : "Download now!")}
      </PDFDownloadLink>
    </button>
  );
};

export default ButtonSaveAsPDF;
