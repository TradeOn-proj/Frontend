import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import Home from "@pages/Home/Home";
import Value from "@pages/Value/Value"
import Upload from "@pages/Product/Upload";
import ValueUpload from "@pages/Value/ValueUpload";
import Detail from "@pages/Product/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    { path: routes.home, element: <Home /> },
    { path: routes.value, element: <Value />},
    { path: routes.upload, element: <Upload />},
    { path: routes.valueupload, element: <ValueUpload />},
    { path: routes.detail, element: <Detail />},

  ]
      
  },
]);

export default router;
