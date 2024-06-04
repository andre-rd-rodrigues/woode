const activateNotification = () => (next) => (action) => {
  if (action.type === "cart/addedItem") {
    next({
      type: "notifications/fireNotification",
      payload: { message: `Added item(s) to cart` }
    });
  } else if (action.type === "cart/removedItem") {
    next({
      type: "notifications/fireNotification",
      payload: { message: "Removed item from cart" }
    });
  }

  return next(action);
};

export default activateNotification;
