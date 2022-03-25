import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authorization/authorization';
import {filmsApi} from './slices/films-api/films-api';

export default configureStore({
  reducer: {
    [filmsApi.reducerPath]: filmsApi.reducer,
    authorization: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(filmsApi.middleware),
});
