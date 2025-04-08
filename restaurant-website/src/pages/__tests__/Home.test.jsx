import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home Page", () => {
  it("displays the cafe name", () => {
    render(<Home />);
    expect(screen.getByText(/Cafe Fausse/i)).toBeInTheDocument();
  });
});
