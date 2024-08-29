import axios from "axios";

export const imagesApi = axios.create({
  baseURL: "http://localhost:3100/",
});

imagesApi.interceptors.request.use((config) => {
  // Modify the config object here
  return config;
});
