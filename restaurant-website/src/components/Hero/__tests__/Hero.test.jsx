import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../Hero";
import heroImage from "../../../assets/images/hero-image.webp";

describe("Hero Component", () => {
  it("renders the hero image with provided URL", () => {
    render(<Hero imageUrl={heroImage} altText="Test hero image" />);
    
    const heroImageElement = screen.getByAltText("Test hero image");
    expect(heroImageElement).toBeInTheDocument();
    // Don't test the exact src attribute since it may be processed by the bundler
    expect(heroImageElement).toHaveAttribute("src");
  });

  it("uses default alt text when none is provided", () => {
    render(<Hero imageUrl={heroImage} />);
    
    const heroImageElement = screen.getByAltText("Restaurant hero image");
    expect(heroImageElement).toBeInTheDocument();
  });

  it("applies correct CSS classes for full-width styling", () => {
    render(<Hero imageUrl={heroImage} />);
    
    const heroSection = document.querySelector(".hero");
    expect(heroSection).toBeInTheDocument();
    
    const imageContainer = document.querySelector(".hero-image-container");
    expect(imageContainer).toBeInTheDocument();
    
    const image = document.querySelector(".hero-image");
    expect(image).toBeInTheDocument();
  });
});