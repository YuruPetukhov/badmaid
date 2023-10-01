import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import "@testing-library/jest-dom";

describe('ButtonComponent test', () => {
        test("ButtonComponent should rendered correct with text prop", () => {
                render(<Button text="Text tbn" />);
                expect(screen.getByTestId("ButtonComponent")).toBeInTheDocument()
                expect(screen.getByTestId("ButtonComponent")).toHaveTextContent("Text tbn")
        });

        test("ButtonComponent should have correct style with active prop", () => {
                // ARRANGE
                render(<Button text="Text tbn" isActive />);
                expect(screen.getByTestId("ButtonComponent")).toBeInTheDocument()
                expect(screen.getByTestId("ButtonComponent")).toBeInTheDocument()
                expect(screen.getByTestId("ButtonComponent")).toHaveTextContent("Text tbn")
                expect(screen.getByTestId("ButtonComponent")).toHaveClass("border-2 border-cyan-500 p-1 text-white bg-cyan-500")
        });
})
