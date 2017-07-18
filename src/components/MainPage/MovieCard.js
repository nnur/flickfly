import React, { Component } from 'react'
import jungleBook from '../../assets/images/Jungle-Book.jpg'
import star from '../../assets/images/star.svg'

class MovieCard extends Component {
  render () {
    const rating = Math.round(this.props.movie.vote_average / 2);
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={ star } className='ff-movie-rating'/>);
    }
    return (
        <div
          className='ff-movie-card--wrapper'
          onClick={() => { this.props.onClick(this.props.movie.id); }}>
          <div className='ff-movie-card'>
            <div className='ff-movie-img--wrapper'>
                <img 
                  src={ `https://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}` } 
                  className='ff-movie-img' alt='' 
                />
              </div>
            <div className='ff-movie-name'>
              {this.props.movie.title}
            </div>
            <div className='ff-movie-score'>
                {stars}
            </div>
          </div>
        </div>
    )
  }
}

export default MovieCard