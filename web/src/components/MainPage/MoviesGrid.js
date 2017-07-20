import React, { Component } from 'react'
import MovieCard from './MovieCard'

class MoviesGrid extends Component {
  render () {
    return (
      <div>
        <div className='ff-movies-grid'>
          {this.props.movies.map((movie, i )=> {
            return (
              <MovieCard
                movie={ movie }
                key={ i }
                onClick={ this.props.onMovieSelected }
              />
            );
          })}

        </div>
        <button 
          className='ff-show-more'
          onClick={ this.props.showMore } >
          { this.props.isButtonLoading ? 
            <span className="ff-loading-wheel"></span> :
            <span>Show more</span>
          }
        </button>
      </div>
    )
  }
}

export default MoviesGrid