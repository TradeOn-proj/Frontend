import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import Home from "@pages/Home/Home";
import Search from "@pages/Search/Search";
import SearchResult from "@pages/SearchResult/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routes.home, element: <Home /> },
      {
        path: routes.search,
        element: <Search />,
      },
      { path: routes.SearchResult, element: <SearchResult /> },
    ],
  },
]);

export default router;
