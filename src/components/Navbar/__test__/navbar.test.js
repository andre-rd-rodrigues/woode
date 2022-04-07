const { render } = require("utils/test-utils");
const { default: Navbar } = require("../Navbar");

describe("Navbar", () => {
  let initialState;

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

  it("should render correctly", () => {
    const { getByText } = render(<Navbar />, { initialState });

    expect(getByText(/home/i)).toBeInTheDocument();
  });

  it("should show cart items according to amount", () => {
    let newState = {
      ...initialState,
      entities: {
        ...initialState.entities,
        cart: {
          ...initialState.entities.cart,
          amount: 2
        }
      }
    };
    const { getByText } = render(<Navbar />, { initialState: newState });

    expect(getByText(/2/i)).toBeInTheDocument();
  });
});
