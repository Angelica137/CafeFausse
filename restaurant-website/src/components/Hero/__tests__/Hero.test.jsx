import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero Component", () => {
  it("renders the hero image with provided URL", () => {
    const testImageUrl = "test-image.jpg";
    render(<Hero imageUrl={testImageUrl} altText="Test hero image" />);
    
    const heroImage = screen.getByAltText("Test hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", testImageUrl);
  });

  it("uses default alt text when none is provided", () => {
    const testImageUrl = "test-image.jpg";
    render(<Hero imageUrl={testImageUrl} />);
    
    const heroImage = screen.getByAltText("Restaurant hero image");
    expect(heroImage).toBeInTheDocument();
  });

  it("applies correct CSS classes for full-width styling", () => {
    render(<Hero imageUrl="test-image.jpg" />);
    
    const heroSection = document.querySelector(".hero");
    expect(heroSection).toBeInTheDocument();
    
    const imageContainer = document.querySelector(".hero-image-container");
    expect(imageContainer).toBeInTheDocument();
    
    const image = document.querySelector(".hero-image");
    expect(image).toBeInTheDocument();
  });
});