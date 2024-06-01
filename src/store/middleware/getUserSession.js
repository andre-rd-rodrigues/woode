import { getUser } from "api/auth.api";
import { getProducts } from "api/products.api";

import { setUser } from "store/entities/auth";
import { updateCart } from "store/entities/cart";

const getUserSession = () => (storeAPI) => (next) => async (action) => {
  // Continue to the next middleware
  next(action);

  // Check if this is the store initialization action
  if (action.type === "INIT_SESSION") {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_STORAGE_TOKEN_KEY)
    );

    if (token) {
      try {
        const user = await getUser(token);

        storeAPI.dispatch(setUser({ user, token }));
        storeAPI.dispatch(updateCart({ ...user.cart }));
      } catch (error) {
        console.error("Failed to fetch user data", error);
        localStorage.removeItem(process.env.REACT_APP_STORAGE_TOKEN_KEY);
      }
    }
  }
};

export default getUserSession;
