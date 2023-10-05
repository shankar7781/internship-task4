import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://172.31.39.98:8800/api/",
  withCredentials: true,
});
