import React from "react";
import App from "./App";
import { createMemoryHistory } from "history";
import { wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "./testUtils";

describe("Main landing page", () => {
  it("this test should pass", () => {
    expect(true).toBeTruthy();
  });

  it("has a navigation bar", () => {
    const { queryByRole } = renderWithRouter(<App />);
    expect(queryByRole("navigation")).toBeInTheDocument();
  });

  it("has a home page title and tag line", () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText("gifting made happy")).toBeInTheDocument();
  });

  it("has a button find out more to go to About page", () => {
    const { getByText } = renderWithRouter(<App />);
    const history = createMemoryHistory();
    userEvent.click(getByText("Find out more"));
    wait(() => {
      expect(getByText("About Page")).toBeInTheDocument();
      expect(history.location.pathname).toEqual("/about");
    });
  });

  it("clicks on a heading on Navigation Bar, goes to that page, and navigation bar is still there", () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);
    const history = createMemoryHistory();
    userEvent.click(getByText("About"));
    wait(() => {
      expect(getByText("About Page")).toBeInTheDocument();
      expect(history.location.pathname).toEqual("/about");
      expect(getByTestId("navigation-bar")).toBeInTheDocument();
    });
  });
});
