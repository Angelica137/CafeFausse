import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Address from "../Address";

describe("Address component", () => {
  // Address information expected to be displayed
  const addressLine1 = "47 Mayfair Gardens";
  const addressLine2 = "Belgravia";
  const addressLine3 = "London";
  const addressLine4 = "SW1X 9BZ";
  const phone = "+44 (0)20 7235 0000";
  const email = "info@cafefausse.co.uk";

  it("renders the address text correctly", () => {
    render(<Address />);

    // Check each line of the address individually
    expect(screen.getByText(addressLine1)).toBeInTheDocument();
    expect(screen.getByText(addressLine2)).toBeInTheDocument();
    expect(screen.getByText(addressLine3)).toBeInTheDocument();
    expect(screen.getByText(addressLine4)).toBeInTheDocument();
  });

  it("renders the phone number correctly", () => {
    render(<Address />);
    const phoneElement = screen.getByText(phone);
    expect(phoneElement).toBeInTheDocument();
  });

  it("renders the email correctly", () => {
    render(<Address />);
    const emailElement = screen.getByText(email);
    expect(emailElement).toBeInTheDocument();
  });

  it("has the correct styling", () => {
    const { container } = render(<Address />);
    const addressContainer = container.querySelector('.address-container');
    expect(addressContainer).toHaveClass("address-container");
    
    // Optional: Additional style checks if needed
    const addressLines = container.querySelectorAll('.address-line');
    expect(addressLines.length).toBe(4);
  });
});