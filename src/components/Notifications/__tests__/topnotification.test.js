const { render, initialState, screen } = require("utils/test-utils");
const { default: TopNotification } = require("../TopNotification");

describe("Top notification", () => {
  let newState;

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

  it("should render correctly according to props", () => {
    render(<TopNotification />, { newState });

    expect(screen.getByText(/Added to cart!/i)).toBeInTheDocument();
  });
});
