const { render, initialState, screen } = require("utils/test-utils");
const { default: Navbar } = require("../Navbar");

describe("Navbar", () => {
  let newState;

  it("should render correctly", () => {
    render(<Navbar />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it("should show cart items according to amount", () => {
    newState = {
      ...initialState,
      entities: {
        ...initialState.entities,
        cart: {
          ...initialState.entities.cart,
          amount: 2
        }
      }
    };
    render(<Navbar />, { newState });

    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });
});
