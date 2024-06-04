import { API_URL_CART } from "./api.constants";
import apiClient from "./axios-instance";

export const addItemToCart = async ({ productId, quantity }) => {
  const response = await apiClient.post(API_URL_CART, { productId, quantity });
  return response.data;
};

export const removeItemFromCart = async (itemId) => {
  const response = await apiClient.delete(`${API_URL_CART}/${itemId}`);
  return response.data;
};

export const updateCartItem = async ({ itemId, quantity }) => {
  const response = await apiClient.put(`${API_URL_CART}/${itemId}`, {
    quantity
  });
  return response.data;
};

export const getCart = async () => {
  const response = await apiClient.get(API_URL_CART);
  return response.data;
};
