import { render, screen } from "@testing-library/react";
import DropDown from "./Index";

describe("DropDown", () => {
  test("DropDown Explore", () => {
    render(<DropDown title={"Explore"} />);
    const exploreDropDown = screen.getByText(/Explore/i);
    expect(exploreDropDown).toBeInTheDocument();
  });

  test("Account dropdown", () => {
    render(<DropDown title="Account" />);
    const dropDownElement = screen.getByText(/Account/i);
    expect(dropDownElement).toBeInTheDocument();
  });
});