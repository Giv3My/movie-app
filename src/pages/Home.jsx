import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchMovies, fetchShows } from '../redux/slices/movieSlice/fetchData';

import { MovieListing } from '../components';

function Home() {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Friends';

  React.useEffect(() => {
    dispatch(fetchMovies(movieText));
    dispatch(fetchShows(showText));
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
};

export default Home;