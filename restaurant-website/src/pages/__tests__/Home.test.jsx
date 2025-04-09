import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home Page", () => {
  it("renders the Header component with the cafe name", () => {
    render(<Home />);
    expect(screen.getByText("Cafe Fausse")).toBeInTheDocument();
  });
});