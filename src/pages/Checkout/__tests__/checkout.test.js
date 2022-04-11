const reactTestRenderer = require("react-test-renderer");
const { render, screen, ConnectedComponent } = require("utils/test-utils");
const { default: Checkout } = require("../Checkout");

it("should render correctly", () => {
  const wrapper = reactTestRenderer.create(ConnectedComponent(<Checkout />));

  expect(wrapper).toMatchSnapshot();
});
