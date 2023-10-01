import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";
import "@testing-library/jest-dom";

describe('header test', () => {
        test("Header should rendered correct with props", () => {
                render(<Header>Test</Header>);
                expect(screen.getByTestId("HeaderComponent")).toBeInTheDocument()
                expect(screen.getByTestId("HeaderComponent")).toHaveTextContent("Test")
        });

})
