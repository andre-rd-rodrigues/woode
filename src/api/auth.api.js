import { API_URL_LOGIN, API_URL_REGISTER } from "./api.constants";
import axios from "axios";

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL_LOGIN}/login`, credentials);
  return response.data;
};

/* export const register = async (credentials) => {
  const response = await axios.post(`${API_URL_REGISTER}/register`, credentials);
  return response.data;
}; */
