import { render, screen, waitFor } from "@testing-library/react";
import MainPage from "./MainPage";
import { MemoryRouter } from "react-router-dom";
import useInfiniteScrollFetch from "../../hooks/useInfiniteScrollFetch";

const mockImages = [
  {
    author: "author",
    id: 1,
    liked: true,
    title: "title",
    price: 100,
    likesCount: 100,
    img: "img",
  },
];

vi.mock("../../hooks/useInfiniteScrollFetch");

describe("<MainPage />", () => {
  const makeWrapper = () => {
    const wrapper = render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    return wrapper;
  };

  it("should render loading", () => {
    vi.mocked(useInfiniteScrollFetch).mockReturnValue({
      dataImages: [],
      loading: true,
      error: { stateError: false, message: "" },
      hasMore: true,
      isFiltering: false,
      page: 1,
      value: "",
      setValue: vi.fn(),
    });
    const wrapper = makeWrapper();
    const loading = wrapper.container.querySelector(".main__grid-loading");
    expect(loading).toBeDefined();
  });
  it("should render list of images", async () => {
    vi.mocked(useInfiniteScrollFetch).mockReturnValue({
      dataImages: mockImages,
      loading: false,
      error: { stateError: false, message: "" },
      hasMore: true,
      isFiltering: false,
      page: 1,
      value: "",
      setValue: vi.fn(),
    });
    const wrapper = makeWrapper();
    const images = wrapper.container.querySelector(".card__img");
    await waitFor(() => {
      expect(images).toBeDefined();
      expect(screen.getByText("author")).toBeDefined();
      expect(screen.getByText("title")).toBeDefined();
      expect(screen.getByText("100")).toBeDefined();
    });
  });
});
