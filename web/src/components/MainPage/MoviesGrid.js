import React from 'react';
import MovieCard from './MovieCard';

const MoviesGrid = props => (
  <div>
    <div className="ff-movies-grid">
      {
        props.movies.map((movie, i) => (
          <MovieCard
            movie={movie}
            key={i}
            onClick={props.onMovieSelected}
          />
        ))
      }
    </div>

    <button
      className="ff-show-more"
      onClick={props.showMore}
    >
      {props.isButtonLoading ? 
        <span className="ff-loading-wheel" /> :
        <span>Show more</span>
      }
    </button>
  </div>
);

export default MoviesGrid;
