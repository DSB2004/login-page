import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const auth_api = axios.create({ baseURL: ` ${BACKEND_URL}/auth` });

export default auth_api;
