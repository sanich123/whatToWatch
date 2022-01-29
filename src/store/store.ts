import { configureStore } from '@reduxjs/toolkit';
import startReducer from './slices/start';
import filmReducer from './slices/film';
import authReducer from './slices/authorization';

export default configureStore({
  reducer: {
    movies: startReducer,
    film: filmReducer,
    authorization: authReducer,
  },
});
