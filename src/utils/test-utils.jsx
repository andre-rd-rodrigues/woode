// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Import your own reducer
import reducer from "store/rootReducer";
import activateNotification from "store/middleware/activateNotification";
import { MemoryRouter } from "react-router";

let store, initialState;

store = createStore(reducer, initialState);
initialState = {
  entities: {
    cart: {
      items: [],
      amount: 0,
      totalPrice: 0
    }
  },
  ui: {
    notifications: {
      topNotification: {
        active: false,
        message: ""
      },
      newsletterNotification: {
        active: false
      }
    }
  }
};

const ConnectedComponent = (children) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );
};

function render(ui, { initialState, ...renderOptions } = {}) {
  const Wrapper = ({ children }) => {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render, initialState, ConnectedComponent };
