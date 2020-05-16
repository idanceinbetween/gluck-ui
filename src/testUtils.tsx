import React, { ReactNode } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, History } from 'history';

interface RenderResultWithHistory extends RenderResult {
  history: History;
}

export const COMPONENT_UNDER_TEST_PATH =
  '/if-you-see-this-your-component-did-not-navigate';

const customRender = (component: ReactNode): RenderResultWithHistory => {
  const history = createMemoryHistory({
    initialEntries: [COMPONENT_UNDER_TEST_PATH],
  });

  const wrappedWithRouterHistory = (component: ReactNode) => {
    return (
      <Router history={history}>
        <Switch>
          <Route path={COMPONENT_UNDER_TEST_PATH}>{component}</Route>
        </Switch>
      </Router>
    );
  };

  const renderResults = render(wrappedWithRouterHistory(component));

  return {
    ...renderResults,
    history,
  };
};

export { customRender as render };
