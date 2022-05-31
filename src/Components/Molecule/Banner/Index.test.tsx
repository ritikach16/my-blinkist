import { render } from "@testing-library/react";
import Banner from "./Index";

describe("Banner", () => {
  test("Banner display", () => {
    render(<Banner />);
  });
});