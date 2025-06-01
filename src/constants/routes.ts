const routes = {
  main: "/",
  home: "/",
  value: "/value",
  upload: "/upload",
  valueupload: "/valueupload",
  detail: "/detail",
  valuedetail: "/valuedetail/:postId",
  search: "/search",
  searchresult: "/search-result",
  login: "/login",
  signin: "/signin",
  keyword: "/keywordpage",
  tradehistory: "/tradehistory",
  review: "/review",
  mypage: "/mypage",
  setting: "/setting",
  data: "/data",
} as const;

export default routes;
