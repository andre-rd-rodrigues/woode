import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem
} from "api/cart.api";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { updateCart } from "store/entities/cart";

export const useCart = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const addItem = useMutation(addItemToCart, {
    onSuccess: (data) => {
      dispatch(updateCart(data));
      queryClient.invalidateQueries("cart");
    }
  });

  const removeItem = useMutation(removeItemFromCart, {
    onSuccess: (data) => {
      dispatch(updateCart(data));
      queryClient.invalidateQueries("cart");
    }
  });

  const updateItem = useMutation(updateCartItem, {
    onSuccess: (data) => {
      dispatch(updateCart(data));
      queryClient.invalidateQueries("cart");
    }
  });

  return { addItem, removeItem, updateItem };
};
