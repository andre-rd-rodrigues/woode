import React from "react";
import renderer from "react-test-renderer";
import About from "../AboutUs";

it("About renders correctly", () => {
  const wrapper = renderer.create(<About />);
  expect(wrapper).toMatchSnapshot();
});
