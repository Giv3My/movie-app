import React from 'react';
import { useSelector } from 'react-redux';

import { Settings } from '../common/sliderSettings';

import Slider from 'react-slick';
import MovieCard from './MovieCard';

function MovieListing() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3
  };

  const { movies } = useSelector(({ movies }) => movies);
  const { shows } = useSelector(({ movies }) => movies);

  const renderData = (type) => {
    if (type === 'movies') {
      return (
        movies.Response === 'True' ? (
          movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
          })
        ) : (
          <div className="movies-error">
            <h3>{movies.Error}</h3 >
          </div >
        )
      );
    } else {
      return (
        shows.Response === 'True' ? (
          shows.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />
          })
        ) : (
          <div className="movies-error">
            <h3>{shows.Error}</h3 >
          </div >
        )
      );
    }
  };

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider
            {...Settings}
          >
            {renderData('movies')}
          </Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider
            {...Settings}
          >
            {renderData('shows')}
          </Slider>
        </div>
      </div>
    </div>
  )
};

export default MovieListing;