import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import Home from "@pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: routes.home, element: <Home /> }],
  },
]);

export default router;
