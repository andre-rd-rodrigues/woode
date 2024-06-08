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
    const sessionId = localStorage.getItem(
      process.env.REACT_APP_STORAGE_SESSION_ID_KEY
    );

    if (token) {
      config.headers.Authorization = `Bearer ${token.replace(/^"|"$/g, "")}`;
    }

    config.headers["x-session-id"] = sessionId;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
