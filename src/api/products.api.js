import { API_URL_PRODUCTS } from "./api.constants";
import apiClient from "./axios-instance";

export const getProducts = async () => {
  const response = await apiClient.get(API_URL_PRODUCTS);
  return response.data;
};
