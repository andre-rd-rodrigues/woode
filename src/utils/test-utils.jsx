// test-utils.jsx
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Import your own reducer
import reducer from "store/rootReducer";
import activateNotification from "store/middleware/activateNotification";
import { MemoryRouter } from "react-router";

function render(ui, { initialState, ...renderOptions } = {}) {
  const store = createStore(reducer, initialState);

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
export { render };
