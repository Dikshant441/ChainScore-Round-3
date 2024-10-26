import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  it("Should render the app logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("App Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "https://www.tekika.io/images/Tekika-logo-white.svg");
  });

  it("Should have the 'KumKar.eth' text", () => {
    render(<Navbar />);
    const text = screen.getByText("KumKar.eth");
    expect(text).toBeInTheDocument();
  });

  it("Should display the user's balance '155 306 TLOS'", () => {
    render(<Navbar />);
    const balance = screen.getByText("155 306 TLOS");
    expect(balance).toBeInTheDocument();
  });

  it("Should have navigation links for Rewards, Collection, Blog, and About", () => {
    render(<Navbar />);
    const rewardsLink = screen.getByText("Rewards");
    const collectionLink = screen.getByText("Collection");
    const blogLink = screen.getByText("Blog");
    const aboutLink = screen.getByText("About");

    expect(rewardsLink).toBeInTheDocument();
    expect(collectionLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  it("Should apply correct CSS classes for styling", () => {
    render(<Navbar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("flex items-center justify-between px-6 py-4 bg-black text-white");
  });
});
