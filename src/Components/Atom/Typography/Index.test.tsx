import { render, screen } from "@testing-library/react";
import TypographyComponent from "./Index";

test( "should render h3 variant ",() => {
    render(<TypographyComponent variant="h3" children="Explore Books on entrepreneurship"/>);
    expect(screen.getByText(/Explore Books on entrepreneurship/i)).toBeInTheDocument();
})