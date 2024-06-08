import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "@/app/login/page";

describe("Login", () => {
  it("renders the heading", () => {
    render(<Login />);

    const heading = screen.getByText("Login");
    expect(heading).toBeInTheDocument();
  });
});
