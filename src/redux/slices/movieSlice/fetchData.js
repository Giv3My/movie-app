import { createAsyncThunk } from '@reduxjs/toolkit';

import movieApi from '../../../common/apis/movieApi';
import { APIKey } from '../../../common/apis/apiKey';

export const fetchMovies = createAsyncThunk('movies/fetchAsyncMovies',
  async () => {
    const { data } = await movieApi.get(`?apikey=${APIKey}&s='Harry'&type=movie`);

    return data;
  }
);

export const fetchShows = createAsyncThunk('movies/fetchAsyncShows',
  async () => {
    const { data } = await movieApi.get(`?apikey=${APIKey}&s='Friends'&type=series`);

    return data;
  }
);

export const fetchDataDetailById = createAsyncThunk('movies/fetchAsyncDataDetailById',
  async (id) => {
    const { data } = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);

    return data;
  }
);
