import axios from "axios";
import { API_URL_LOGIN, API_URL_REGISTER, API_URL_USER } from "./api.constants";

export const login = async (credentials) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}${API_URL_LOGIN}`,
    credentials
  );
  return response.data;
};

/* export const register = async (credentials) => {
  const response = await axios.post(`${API_URL_REGISTER}/register`, credentials);
  return response.data;
}; */

export const getUser = async (token) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}${API_URL_USER}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
};
