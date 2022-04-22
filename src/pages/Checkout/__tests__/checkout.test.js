import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const reactTestRenderer = require("react-test-renderer");
const {
  ConnectedComponent,
  render: renderUtils,
  initialState
} = require("utils/test-utils");
const { default: Checkout } = require("../Checkout");

describe("Checkout", () => {
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

  it("should display success modal, when form is submited", async () => {
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

    const formValues = {
      firstName: "Andre",
      lastestName: "Rodrigues",
      town: "unknown",
      email: "something@mail.com"
    };

    const inputLabels = [
      "FIRST NAME*",
      "LAST NAME*",
      "town / city*",
      "email address*"
    ];

    const streetInput = {
      mockValue: "Road unkown mock",
      placeholder: "House number and street name"
    };

    inputLabels.map((label, index) =>
      userEvent.type(
        screen.getByLabelText(label),
        Object.values(formValues)[index]
      )
    );
    userEvent.type(
      screen.getByPlaceholderText(streetInput.placeholder),
      streetInput.mockValue
    );

    userEvent.click(screen.getByRole("button"));

    expect(
      await screen.findByTestId("checkout_success_modal")
    ).toBeInTheDocument();
  });
});
