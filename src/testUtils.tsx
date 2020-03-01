import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderWithRouter = (component: React.ReactNode) => {
  return {
    ...render(
      component as React.ReactElement<
        any,
        string | React.JSXElementConstructor<any>
      >,
      { wrapper: MemoryRouter }
    )
  };
};
