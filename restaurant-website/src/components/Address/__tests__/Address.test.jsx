import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Address from "../Address";

describe("Address component", () => {
	const address = "47 Mayfair Gardens Belgravia, London, SW1X 9BZ";
	const phone = "+44 (0)20 7235 0000";
	const email = "info@cafefausse.co.uk";

	it("renders the address text correctly", () => {
		render(<Address address={address} phone={phone} email={email} />);

		const addressElement = screen.getByText(address);
		expect(addressElement).toBeInTheDocument();
	})

	it("renders the phone number correctly", () => {
		render(<Address address={address} phone={phone} email={email} />);
		const phoneElement = screen.getByText(phone);
		expect(phoneElement).toBeInTheDocument();
	})

	it("renders the email correctly", () => {
		render(<Address address={address} phone={phone} email={email} />);
		const emailElement = screen.getByText(email);
		expect(emailElement).toBeInTheDocument();
	})

	it("has the correct styling", () => {
		render(<Address address={address} phone={phone} email={email} />);
		const addressContainer = screen.getByTestId("address-container");
		expect(addressContainer).toHaveClass("address-container");
	});
})