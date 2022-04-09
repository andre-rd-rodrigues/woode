const { render, initialState } = require("utils/test-utils");
const { default: Navbar } = require("../Navbar");

describe("Navbar", () => {
  let newState;

  it("should render correctly", () => {
    const { getByText } = render(<Navbar />);

    expect(getByText(/home/i)).toBeInTheDocument();
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
    const { getByText } = render(<Navbar />, { newState });

    expect(getByText(/2/i)).toBeInTheDocument();
  });
});
