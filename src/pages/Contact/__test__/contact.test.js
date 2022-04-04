import React from "react";
import Contact from "../Contact";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("Contact renders correctly", () => {
  const wrapper = renderer.create(<Contact />);
  expect(wrapper).toMatchSnapshot();
});

it("Contact form submits correctly", async () => {
  const alertMock = jest.spyOn(window, "alert").mockImplementation();
  const { getByTestId, getByPlaceholderText, getByText, getByRole } = render(
    <Contact />
  );
  window.alert = () => {};

  const textarea = getByTestId("contact_textarea");
  const nameInput = getByPlaceholderText(/Your Name/i);
  const emailInput = getByPlaceholderText(/Your Email/i);
  const submitButton = getByText(/Submit/i);

  userEvent.type(textarea, "Something");
  userEvent.type(nameInput, "My name");
  userEvent.type(emailInput, "email@example.com");
  userEvent.click(submitButton);

  expect(alertMock).toHaveBeenCalledTimes(1);
});
