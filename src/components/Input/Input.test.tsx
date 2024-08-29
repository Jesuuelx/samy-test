import { MemoryRouter } from "react-router-dom";
import Input from "./Input";
import { fireEvent, render } from "@testing-library/react";

describe("<Input />", () => {
  const makeWrapper = (newProps = {}) => {
    const props = {
      value: "",
      setValue: vi.fn(),
      page: 1,
      ...newProps,
    };
    const wrapper = render(
      <MemoryRouter
        initialEntries={[`/?page=${props.page}&search=${props.value}`]}
      >
        <Input {...props} />
      </MemoryRouter>
    );
    return wrapper;
  };

  it("should render input", () => {
    const wrapper = makeWrapper();
    const input = wrapper.container.querySelector("input");
    expect(input).toBeDefined();
  });
  it("should call setValue", () => {
    const setValue = vi.fn();
    const wrapper = makeWrapper({ setValue });
    const input: any = wrapper.container.querySelector("input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(setValue).toHaveBeenCalledWith("test");
  });
});
