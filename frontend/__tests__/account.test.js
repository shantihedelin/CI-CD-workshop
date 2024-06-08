import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Account from "@/app/account/page";

describe("Account", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("prompts the user to log in if not logged in", () => {
    render(<Account />);
    expect(
      screen.getByText(
        "Du behöver logga in för att få åtkomst till kontouppgifter."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });
});
