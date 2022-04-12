import { screen } from "@testing-library/react";
const reactTestRenderer = require("react-test-renderer");
const {
  ConnectedComponent,
  render: renderUtils,
  initialState
} = require("utils/test-utils");
const { default: Checkout } = require("../Checkout");

it("should render correctly", () => {
  const wrapper = reactTestRenderer.create(ConnectedComponent(<Checkout />));

  expect(wrapper).toMatchSnapshot();
});

it("should display cart values accordingly", () => {
  let newState;
  newState = {
    ...initialState,
    entities: {
      ...initialState.entities,
      cart: {
        items: [
          {
            id: 2,
            name: "Water Pot",
            category: "decoration",
            price: 75,
            src: "https://umea.qodeinteractive.com/wp-content/uploads/2020/11/shop-img22.jpg",
            amount: 1,
            weight: "5 kg",
            dimensions: "10 x 10 x 10 cm",
            sizes: "L- 450x550cm, M- 330x550cm, S- 220x330cm"
          }
        ],
        amount: 1,
        totalPrice: 75
      }
    }
  };
  renderUtils(<Checkout />, { newState });

  const name = newState.entities.cart.items[0].name;
  const amount = newState.entities.cart.amount;

  expect(screen.getByText(`${name} x ${amount}`)).toBeInTheDocument();
});
