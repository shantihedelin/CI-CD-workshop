import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Account from "@/app/account/page";

describe("Account", () => {
    it('renders "Current balance:" when logged in', () => {
        render(<Account />);

        const currBalance = screen.getByText('Current balance');
        expect(currBalance).toBeInTheDocument();
    });
});
