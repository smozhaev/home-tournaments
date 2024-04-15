import { RouteObject, useRoutes } from "react-router-dom";
import AboutPage from "../../Pages/About";
import ForOrginizerPage from "../../Pages/ForOrganizer";
import ForPlaersPage from "../../Pages/ForPlaers";
import HomePage from "../../Pages/Home";

const MainRouter = () => {
  const basedPath: RouteObject[] = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/forplaers", element: <ForOrginizerPage /> },
    { path: "/organizer", element: <ForPlaersPage /> },
  ];

  const resultPath: RouteObject[] = basedPath;

  return useRoutes(resultPath);
};

export default MainRouter;
