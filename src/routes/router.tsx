import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import Home from "@pages/Home/Home";
import Search from "@pages/Search/Search";
import SearchResult from "@pages/SearchResult/SearchResult";
import Login from "@pages/Login/Login";
import SignIn from "@pages/SignIn/SignIn";
import KeyWordPage from "@pages/KeyWordPage/KeyWordPage";

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
      { path: routes.searchresult, element: <SearchResult /> },
      { path: routes.login, element: <Login /> },
      { path: routes.signin, element: <SignIn /> },
      { path: routes.keyword, element: <KeyWordPage /> },
    ],
  },
]);

export default router;
