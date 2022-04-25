const { render, initialState, screen } = require("utils/test-utils");
const { default: TopNotification } = require("../TopNotification");

describe("Top notification", () => {
  let newState;

  it("should render correctly according to props", () => {
    newState = {
      ...initialState,
      ui: {
        ...initialState.ui,
        notifications: {
          ...initialState.ui.notifications,
          topNotification: {
            active: true,
            message: "Added to cart!"
          }
        }
      }
    };
    render(<TopNotification />, { newState });

    expect(screen.getByText(/Added to cart!/i)).toBeInTheDocument();
  });
});
