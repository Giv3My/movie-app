import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchMovies, fetchShows } from '../redux/slices/movieSlice/fetchData';

import { MovieListing } from '../components';

function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
};

export default Home;