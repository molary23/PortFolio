import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Nav from "../layout/Nav";

describe("Testing Nav Component", () => {
  test("check if Nav is rendered", () => {
    render(<Nav />);
    const mng = screen.getByTestId("main-nav");
    expect(mng).toBeTruthy();
  });
});
