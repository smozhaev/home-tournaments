import { RouteObject, useRoutes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import ForOrginizerPage from "../../Pages/ForOrganizer";
import ForPlaersPage from "../../Pages/ForPlaers";
import HomePage from "../../Pages/Home";

const MainRouter = () => {
  const basedPath: RouteObject[] = [
    { path: "/", element: <HomePage /> },
    { path: "/forplaers", element: <ForOrginizerPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/organizer", element: <ForPlaersPage /> },
  ];

  const resultPath: RouteObject[] = basedPath;

  return useRoutes(resultPath);
};

export default MainRouter;