import { redirect } from "@tanstack/react-router";
import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? import.meta.env.VITE_API_DEVELOPMENT
      : import.meta.env.VITE_API_PRODUCTION,
  withCredentials: false,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
      `Bearer ${localStorage.getItem("access_token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
      // localStorage.removeItem("access_token");
      // window.location.href = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
