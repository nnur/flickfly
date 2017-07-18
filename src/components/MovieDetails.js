import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom';
import jungleBook from '../assets/images/Jungle-Book.jpg'
import close from '../assets/images/close.svg'
import movies from './../services/movies';
import star from '../assets/images/star.svg'

class MovieDetails extends Component {
  constructor({ match }) {
    super();
    console.log(match.params.id)
  }

  onClose() {
    this.props.history.push("/");
  }

  render () {
    let movie = movies.results[0];
    const rating = Math.round(movie.vote_average / 2);
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={ star } className='ff-movie-rating'/>);
    }
    return (
      <div className='ff-movie-details--container'>
        <div className='ff-movie-details-close--wrapper'>
          <img className='ff-movie-details-close' src={ close } alt='' onClick={this.onClose.bind(this)}/>
        </div>
        <div className='ff-movie-details--wrapper'>
          <img 
            src={ `https://image.tmdb.org/t/p/w342/${movie.poster_path}` } 
            className='ff-movie-details--poster' alt='' 
          />
          <div className='ff-movie-details'> 
            <div className='ff-movie-details--title'> { movie.title }</div>

            <div className='ff-movie-details--overview'> 
              { movie.overview }
            </div>

            <div className='ff-movie-details--info'>
              <span> { stars } </span>
              <span> { movie.release_date.replace(/-/g, '/') } </span>
              <span> Rated adult: { movie.rated_adult ? ' Yes' : ' No' }</span>
              <span> { `${movie.vote_count} votes` } </span>
            </div>

            <div> 
              <div className='ff-movie-details--genre'> 
                <div> Horror </div>
              </div>
              <div className='ff-movie-details--genre'> 
                <div> Psychological </div>
              </div>
              <div className='ff-movie-details--genre'> 
                <div> Thriller </div>
              </div>
              <div className='ff-movie-details--genre'> 
                <div> Thriller </div>
              </div>

              <div className='ff-movie-details--genre'> 
                <div> Psychological </div>
              </div>
              <div className='ff-movie-details--genre'> 
                <div> Thriller </div>
              </div>
              <div className='ff-movie-details--genre'> 
                <div> Thriller </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails