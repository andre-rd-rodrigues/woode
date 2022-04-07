import React from "react";
import Contact from "../Contact";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { render, ConnectedComponent } from "utils/test-utils";

describe("Contact us", () => {
  it("should render correctly", () => {
    const wrapper = renderer.create(ConnectedComponent(<Contact />));

    expect(wrapper).toMatchSnapshot();
  });

  it("should show notification when submit is successfull", async () => {
    const { getByTestId, getByPlaceholderText, getByText, findByTestId } =
      render(<Contact />);

    const textarea = getByTestId("contact_textarea");
    const nameInput = getByPlaceholderText(/Your Name/i);
    const emailInput = getByPlaceholderText(/Your Email/i);
    const submitButton = getByText(/Submit/i);

    userEvent.type(textarea, "Something");
    userEvent.type(nameInput, "My name");
    userEvent.type(emailInput, "email@example.com");
    userEvent.click(submitButton);

    expect(await findByTestId("top_notification")).toBeInTheDocument();
  });
});
