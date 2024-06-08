import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav", () => {
    it("renders the logo and bank name", () => {
      render(<Nav />);
      const bankName = screen.getByText("Nova Bank");
      
      expect(bankName).toBeInTheDocument();
    });

});