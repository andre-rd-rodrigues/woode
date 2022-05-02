import React from "react";
import { render, fireEvent, initialState, screen } from "utils/test-utils";
import Cart from "../Cart";

describe("Shopping cart", () => {
  let props;

  props = {
    cart: {
      items: [],
      amount: 0,
      totalPrice: 0
    },
    removeItem: jest.fn(),
    updateAmount: jest.fn()
  };

  it("should first render be with no items", () => {
    render(<Cart {...props} />, { initialState });

    expect(
      screen.getByText(/Your cart is currently empty./i)
    ).toBeInTheDocument();
  });

  it("should show the new item, when new a item is added to cart", () => {
    let newState = {
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

    render(<Cart {...props} />, {
      newState
    });

    const inputElement = screen.getByTestId("cart_amount_input");

    expect(inputElement).toBeInTheDocument();
  });

  it("should show the correct input amount, when amount is updated", () => {
    let newState = {
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

    render(<Cart {...props} />, {
      newState
    });

    const inputElement = screen.getByTestId("cart_amount_input");

    fireEvent.change(inputElement, { target: { value: "23" } });

    expect(inputElement.value).toBe("23");
  });

  it("should show correct price and total", () => {
    let newState = {
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

    render(<Cart {...props} />, {
      initialState: newState
    });

    const inputElement = screen.getByTestId("cart_amount_input");

    fireEvent.change(inputElement, { target: { value: "2" } });

    const price = screen.getByText("$75");
    const total = screen.getByTestId("cart_total");

    expect(price).toBeInTheDocument();
    expect(total).toHaveTextContent("$150");
  });
});
