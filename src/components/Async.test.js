import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("<Async />", () => {
  test("renders posts if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole(
      "listitem",
      { exact: true },
      { timeout: 10000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});
