import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './slices/movieSlice/movieSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
});

export default store;