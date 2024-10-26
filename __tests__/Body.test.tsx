import { render, screen, fireEvent } from "@testing-library/react";
import Body from "@/components/Body";

describe("Body Component", () => {
  it("should scroll horizontally on wheel event", () => {
    render(<Body />);

    const scrollContainer = screen.getByTestId("scroll-container");
    Object.defineProperty(scrollContainer, "scrollLeft", {
      writable: true,
      value: 0,
    });

    fireEvent.wheel(scrollContainer, { deltaY: 100 });
    expect(scrollContainer.scrollLeft).toBeGreaterThan(0);
  });
});
