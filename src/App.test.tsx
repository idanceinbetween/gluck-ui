import React from "react";
import App from "./App";
import { createMemoryHistory } from "history";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Main landing page", () => {
  it("this test should pass", () => {
    expect(true).toBeTruthy();
  });

  it("has a top navigation bar", () => {
    const { queryByTestId } = render(<App />, { wrapper: MemoryRouter });
    expect(queryByTestId("navigation-bar")).toBeInTheDocument();
  });

  it("has a home page title and tag line", () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });
    expect(getByText("glūck")).toBeInTheDocument();
    expect(getByText("gifting made happy")).toBeInTheDocument();
  });

  it("has a button find out more to go to About page", () => {
    const { getByText } = render(<App />, { wrapper: MemoryRouter });
    const history = createMemoryHistory();
    userEvent.click(getByText("Find out more"));
    wait(() => {
      expect(getByText("About Page")).toBeInTheDocument();
      expect(history.location.pathname).toEqual("/about");
    });
  });
});
