import React, { Component } from 'react'
import MovieCard from './MovieCard'
import movies from './../../services/movies';
import { browserHistory } from 'react-router-dom';


class MoviesGrid extends Component {
  render () {
    return (
      <div>
        <div className='ff-movies-grid'>
          {movies.results.map((movie, i )=> {
            return (
              <MovieCard
                movie={movie}
                key={i}
                onClick={this.props.onMovieSelected}
              />
            );
          })}

        </div>
        <button className='ff-show-more'>Show more</button>
      </div>
    )
  }
}

export default MoviesGrid