import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "@constants/routes";
import Home from "@pages/Home/Home";
import Value from "@pages/Value/Value";
import Upload from "@pages/Product/Upload";
import ValueUpload from "@pages/Value/ValueUpload";
import Detail from "@pages/Product/Detail";
import ValueDetail from "@pages/Value/ValueDetail";
import Search from "@pages/Search/Search";
import SearchResult from "@pages/SearchResult/SearchResult";
import Login from "@pages/Login/Login";
import SignIn from "@pages/SignIn/SignIn";
import KeyWordPage from "@pages/KeyWordPage/KeyWordPage";
import TradeHistory from "@pages/Trade/TradeHistory";
import Review from "@pages/Review/Review";
import MyPage from "@pages/MyPage/MyPage";
import Setting from "@pages/Setting/Setting";
import Data from "@pages/Data/Data";
import ChatPage from "@pages/Chat/ChatPage"
import OthersPage from "@pages/OthersPage/OthersPage";
import ListProduct from "@pages/ListProduct/ListProduct";
import ReviewList from "@pages/Review/ReviewList"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routes.home, element: <Home /> },
      { path: routes.value, element: <Value /> },
      { path: routes.upload, element: <Upload /> },
      { path: routes.valueupload, element: <ValueUpload /> },
      { path: routes.detail, element: <Detail /> },
      { path: routes.valuedetail, element: <ValueDetail /> },
      {
        path: routes.search,
        element: <Search />,
      },
      { path: routes.searchresult, element: <SearchResult /> },
      { path: routes.login, element: <Login /> },
      { path: routes.signin, element: <SignIn /> },
      { path: routes.keyword, element: <KeyWordPage /> },
      { path: routes.tradehistory, element: <TradeHistory /> },
      { path: routes.review, element: <Review /> },
      { path: routes.mypage, element: <MyPage /> },
      { path: routes.setting, element: <Setting /> },
      { path: routes.data, element: <Data /> },
      { path: routes.chat, element: <ChatPage /> },
      { path: `${routes.otherspage}/:userId`, element: <OthersPage /> },
      { path: routes.listproduct, element: <ListProduct /> },
      { path: routes.reviewlist, element: <ReviewList /> },

    ],
  },
]);

export default router;
