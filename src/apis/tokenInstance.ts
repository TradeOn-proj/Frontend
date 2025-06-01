import axios from "axios";
import routes from "@constants/routes";

const baseURL = import.meta.env.VITE_BASE_URL;

const tokenInstance = axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
     "ngrok-skip-browser-warning": "true",
  },
});

tokenInstance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("accessToken");
    const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0ODc5MTMwMiwianRpIjoiZTYwMzAyMjItMDhlOS00M2U5LTg0MTEtM2MyODY3OTNiNzAxIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjkiLCJuYmYiOjE3NDg3OTEzMDIsImNzcmYiOiJiYTA3NzMzMy1jMzU1LTRkYzktYjI4Yi1iYzI1ZWE2YzU4MDYiLCJleHAiOjE3NDkxMzY5MDJ9.LRan6yR5_DRKQmYmGoWsKr39CJP2AUQf-2FeUQqPjeg";
    if (token) {
      // config.headers.Authorization = `Bearer ${token}`;
       config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
tokenInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      window.location.href = routes.main;
    } else {
      window.location.href = "/404";
    }
    return Promise.reject(error);
  }
);

export default tokenInstance;
