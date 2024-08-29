import { render } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  const makeWrapper = (newProps = {}) => {
    const props = {
      img: "img",
      title: "title",
      author: "author",
      liked: true,
      likesCount: 100,
      price: 100,
      id: 1,
    };
    const wrapper = render(<Card {...props} />);

    return { wrapper, props };
  };
  it("should render card", () => {
    const { wrapper, props } = makeWrapper();
    const card = wrapper.container;
    expect(props.author).toBeDefined();
    expect(props.title).toBeDefined();
    expect(props.likesCount).toBeDefined();
    expect(props.price).toBeDefined();
    expect(card).toBeDefined();
  });
});
