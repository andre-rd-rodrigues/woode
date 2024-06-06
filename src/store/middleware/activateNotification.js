const activateNotification = () => (next) => (action) => {
  if (action.type === "cart/addItem/fulfilled") {
    next({
      type: "notifications/fireNotification",
      payload: { message: `Added item(s) to cart` }
    });
  } else if (action.type === "cart/removeItem/fulfilled") {
    next({
      type: "notifications/fireNotification",
      payload: { message: "Removed item from cart" }
    });
  }

  return next(action);
};

export default activateNotification;
