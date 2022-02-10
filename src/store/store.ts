import { configureStore } from '@reduxjs/toolkit';
import startReducer from './slices/start/start';
import filmReducer from './slices/film/film';
import authReducer from './slices/authorization/authorization';

export default configureStore({
  reducer: {
    movies: startReducer,
    film: filmReducer,
    authorization: authReducer,
  },
});
