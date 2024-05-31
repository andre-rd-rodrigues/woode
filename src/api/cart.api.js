import axios from "axios";
import { API_URL_CART } from "./api.constants";

const API_URL = `${process.env.REACT_APP_API_URL}${API_URL_CART}`;

export const addItemToCart = async ({ productId, quantity }) => {
  const response = await axios.post(API_URL, { productId, quantity });
  return response.data;
};

export const removeItemFromCart = async (itemId) => {
  const response = await axios.delete(`${API_URL}/${itemId}`);
  return response.data;
};

export const updateCartItem = async ({ itemId, quantity }) => {
  const response = await axios.put(`${API_URL}/${itemId}`, quantity);
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
