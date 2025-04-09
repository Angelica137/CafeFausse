
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  it("displays the restaurant name passed as prop", () => {
    const testName = "Test Restaurant";
    render(<Header restaurantName={testName} />);
    expect(screen.getByText(testName)).toBeInTheDocument();
  });

  it("renders with the correct CSS class", () => {
    render(<Header restaurantName="Test Restaurant" />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("header");
    
    const nameElement = screen.getByRole("heading", { level: 1 });
    expect(nameElement).toHaveClass("restaurant-name");
  });

	it("has the correct layout structure", () => {
    render(<Header restaurantName="Test Restaurant" />);
    
    // Check if header-content exists
    const headerContent = document.querySelector(".header-content");
    expect(headerContent).toBeInTheDocument();

		const logoContainer = document.querySelector(".logo-container");
    expect(logoContainer).toBeInTheDocument();

		// Check if restaurant name is in the logo container
    const restaurantName = screen.getByRole("heading", { level: 1 });
    expect(logoContainer.contains(restaurantName)).toBe(true);
    
    // Check if the three sections exist
    // const leftNav = document.querySelector(".left-nav");
    // expect(leftNav).toBeInTheDocument();
    
    // const rightNav = document.querySelector(".right-nav");
    // expect(rightNav).toBeInTheDocument();
    
    
  });
});