import React from "react";
import About from "../AboutUs";
import renderer from "react-test-renderer";

it("About renders correctly", () => {
  const wrapper = renderer.create(<About />);
  expect(wrapper).toMatchSnapshot();
});
