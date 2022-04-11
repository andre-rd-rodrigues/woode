const reactTestRenderer = require("react-test-renderer");
const { default: Loading } = require("../Loading");

it("should render correctly", () => {
  const wrapper = reactTestRenderer.create(<Loading />);

  expect(wrapper).toMatchSnapshot();
});
