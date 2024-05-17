import { RouteObject, useRoutes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import ForOrginizerPage from "../../Pages/ForOrganizer";
import HomePage from "../../Pages/Home";
import TournamentInfo from "../../Pages/TournamentInfo";
import Tournaments from "../../Pages/Tournaments";

const MainRouter = () => {
  const basedPath: RouteObject[] = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/organizer", element: <ForOrginizerPage /> },
    { path: "/tournaments", element: <Tournaments /> },
    { path: "/tournaments/:id", element: <TournamentInfo /> },
  ];

  const resultPath: RouteObject[] = basedPath;

  return useRoutes(resultPath);
};

export default MainRouter;