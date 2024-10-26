import React from "react";
import { render, screen } from "@testing-library/react";
import ChapterCard from "@/components/ChapterCard";
import "@testing-library/jest-dom";

// Mock IntersectionObserver
beforeAll(() => {
  class MockIntersectionObserver {
    constructor(
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit
    ) {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }

  global.IntersectionObserver = MockIntersectionObserver;
});

describe("ChapterCard Component", () => {
  it("Should not show 'Coming Soon' when the chapter is unlocked", () => {
    render(
      <ChapterCard
        name="Prepare For War"
        imageUrl="https://tekika-nfts.s3.amazonaws.com/Assets/Book+1+Audio+logs/Book_1_Chapter_4.mp3"
        isLocked={false}
      />
    );
    const text = screen.queryByText("Coming Soon");
    expect(text).not.toBeInTheDocument();
  });
});
