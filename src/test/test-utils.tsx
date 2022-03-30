import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { AppStore, RootState } from '../store/store';
import type { PreloadedState } from '@reduxjs/toolkit';
import { setupStore } from '../store/store';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store. For
// future dependencies, such as wanting to test with react-router, you can extend
// this interface to accept a path and route and use those in a <MemoryRouter />
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

const history = createBrowserHistory();
// eslint-disable-next-line @typescript-eslint/ban-types
export function wrapper({ children }: PropsWithChildren<{}>) {
  return (
    <Provider store={setupStore()}>
      <Router history={history}>
        {children}
      </Router>
    </Provider>
  );
}

function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {

  return { store, ...render(ui, { wrapper: wrapper, ...renderOptions }) };
}

export { renderWithProviders };

