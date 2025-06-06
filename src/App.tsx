import Header from "@components/layout/Header/header";
import Footer from "@components/layout/Footer/Footer"
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { globalStyles } from "./styles/global";
import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: true,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <Header />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
