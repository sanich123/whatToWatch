// import { render } from '@testing-library/react'
// import type { RenderOptions } from '@testing-library/react'
// import React, { PropsWithChildren, ReactNode } from 'react'
// import { Provider } from 'react-redux'
// import type { AppStore, RootState } from '../store/store';
// import type { PreloadedState } from '@reduxjs/toolkit';
// import { setupStore } from '../store/store';

// // This type interface extends the default options for render from RTL, as well
// // as allows the user to specify other things such as initialState, store. For
// // future dependencies, such as wanting to test with react-router, you can extend
// // this interface to accept a path and route and use those in a <MemoryRouter />
// interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
//   preloadedState?: PreloadedState<RootState>
//   store?: AppStore
// }


// function renderWithProviders(
//   ui: React.ReactElement,
//   {
//     preloadedState = {},
//     store = setupStore(preloadedState),
//     ...renderOptions
//   }: ExtendedRenderOptions = {}
// ) {
//   function Wrapper({ children }): JSX.Element {
//     return <Provider store={store}>{children}</Provider>
//   }
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
// }

// export { renderWithProviders }

export {};
