import authReducer from './slices/authorization/authorization';
import {filmsApi} from './slices/films-api/films-api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [filmsApi.reducerPath]: filmsApi.reducer,
  authorization: authReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (gDFM) => gDFM({
    serializableCheck: false,
  }).concat(filmsApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
