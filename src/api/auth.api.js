import { API_URL_LOGIN, API_URL_REGISTER, API_URL_USER } from "./api.constants";
import apiClient from "./axios-instance";

export const login = async (credentials) => {
  return await apiClient.post(API_URL_LOGIN, credentials).then((res) => {
    localStorage.removeItem(process.env.REACT_APP_STORAGE_SESSION_ID_KEY);
    return res.data;
  });
};

export const register = async (credentials) => {
  const response = await apiClient.post(API_URL_REGISTER, credentials);
  return response.data;
};

export const getUser = async () => {
  const response = await apiClient.get(API_URL_USER);
  return response.data;
};
