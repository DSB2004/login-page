import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const user_api = axios.create({ baseURL: `${BACKEND_URL}/api/user` });

user_api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers["Authorization"] = token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default user_api;
