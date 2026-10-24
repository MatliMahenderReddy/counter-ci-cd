
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

afterEach(() => {
  cleanup();
});

describe("Counter App", () => {
  it("displays the initial count as zero", () => {
    render(<App />);

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increases the count when Increase is clicked", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("button", { name: /increase/i })
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("decreases the count when Decrease is clicked", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("button", { name: /decrease/i })
    );

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  it("resets the count to zero", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("button", { name: /increase/i })
    );

    fireEvent.click(
      screen.getByRole("button", { name: /reset counter/i })
    );

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("increases and decreases the count correctly", () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole("button", { name: /increase/i })
    );

    fireEvent.click(
      screen.getByRole("button", { name: /increase/i })
    );

    fireEvent.click(
      screen.getByRole("button", { name: /decrease/i })
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
