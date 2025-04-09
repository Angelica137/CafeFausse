
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
    
		// Check if right nav exist
    // const rightNav = document.querySelector(".right-nav");
    // expect(rightNav).toBeInTheDocument();
  });

	it("renders left navigation items correctly", () => {
		render(<Header restaurantName="Test Restaurant" />);

		// Check if the navigation lement exists in teh left nav
		const leftNav = document.querySelector(".left-nav");
		expect(leftNav).toBeInTheDocument();
		const navElement = leftNav.querySelector("nav");
		expect(navElement).toBeInTheDocument();

		// Check for two sepcific navigation links
		const reservationLink = screen.getByText("Make a Reservation");
		expect(reservationLink).toBeInTheDocument();
    expect(reservationLink.tagName.toLowerCase()).toBe("a");

		const menuLink = screen.getByText("Menu");
		expect(menuLink).toBeInTheDocument();
		expect(menuLink.tagName.toLowerCase()).toBe("a");
		// Check if the links have the correct href attributes
		expect(reservationLink).toHaveAttribute("href", "/reservations");
		expect(menuLink).toHaveAttribute("href", "/menu");
	});
});