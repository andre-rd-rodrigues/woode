import React from "react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import { render, ConnectedComponent, screen } from "utils/test-utils";
import Contact from "../Contact";

describe("Contact us", () => {
  it("should render correctly", () => {
    const wrapper = renderer.create(ConnectedComponent(<Contact />));

    expect(wrapper).toMatchSnapshot();
  });

  // it("should show notification when submit is successfull", async () => {
  //   render(<Contact />);

  //   const textarea = screen.getByTestId("contact_textarea");
  //   const nameInput = screen.getByPlaceholderText(/Your Name/i);
  //   const emailInput = screen.getByPlaceholderText(/Your Email/i);
  //   const submitButton = screen.getByText(/Submit/i);

  //   userEvent.type(textarea, "Something");
  //   userEvent.type(nameInput, "My name");
  //   userEvent.type(emailInput, "email@example.com");
  //   userEvent.click(submitButton);

  //   expect(screen.getByTestId("top_notification")).toBeInTheDocument();
  // });
});
