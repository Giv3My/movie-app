import { createSlice } from '@reduxjs/toolkit';

import { fetchMovies, fetchShows, fetchDataDetailById } from './fetchData';

const initialState = {
  movies: {},
  shows: {},
  selectedItem: {}
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
    },
    [fetchShows.fulfilled]: (state, { payload }) => {
      state.shows = payload;
    },
    [fetchDataDetailById.pending]: (state) => {
      state.selectedItem = {};
    },
    [fetchDataDetailById.fulfilled]: (state, { payload }) => {
      state.selectedItem = payload;
    },
  }
});

export default movieSlice.reducer;