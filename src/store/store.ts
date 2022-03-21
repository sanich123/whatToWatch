import { configureStore } from '@reduxjs/toolkit';
import startReducer from './slices/start/start';
import filmReducer from './slices/film/film';
import authReducer from './slices/authorization/authorization';
import {filmsApi} from './slices/films-api/films-api';

export default configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    movies: startReducer,
    film: filmReducer,
    authorization: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(filmsApi.middleware),
});
