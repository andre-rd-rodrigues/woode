import axios from "axios";
import { API_URL_PRODUCTS } from "./api.constants";

const API_URL = `${process.env.REACT_APP_API_URL}${API_URL_PRODUCTS}`;

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
