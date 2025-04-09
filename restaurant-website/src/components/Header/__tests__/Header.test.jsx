
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
});