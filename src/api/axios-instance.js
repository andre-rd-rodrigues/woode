import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(process.env.REACT_APP_STORAGE_TOKEN_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token.replace(/^"|"$/g, "")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
