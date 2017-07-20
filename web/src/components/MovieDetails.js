import React, { Component } from 'react'
import close from '../assets/images/close.svg'
import { getMovie } from './../services/movies';
import star from '../assets/images/star.svg'
import missingPoster from '../assets/images/poster-missing.png'

class MovieDetails extends Component {
  constructor({ match }) {
    super();
    this.state = {
      id: match.params.id,
      movie: null
    }
  }

  componentWillMount() {
    getMovie({ id: this.state.id }).then(movie => {
      this.setState({ movie });
    })
  }

  getStars() {
    const rating = Math.round(this.state.movie.vote_average / 2);
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={ star } key={ i } className='ff-movie-rating' alt=''/>);
    }
    if (stars.length === 0) {
      stars = 'Unrated';
    }
    return stars;
  }

  onClose() {
    this.props.history.push("/");
  }

  handleImgError(event) {
    event.target.setAttribute("src", missingPoster);
  }

  render () {
    const movie = this.state.movie;
    if (!movie) { return <div> </div> }
    const stars = this.getStars();
    
    return (
      <div className='ff-movie-details--container'>
        <div className='ff-movie-details-close--wrapper'>
          <img className='ff-movie-details-close' src={ close } alt='' 
            onClick={this.onClose.bind(this)}/>
        </div>
        <div className='ff-movie-details--wrapper'>
          <img onError={ this.handleImgError }
            src={ `https://image.tmdb.org/t/p/w342/${movie.poster_path}` } 
            className='ff-movie-details--poster' alt='' />

          <div className='ff-movie-details'> 
            <div className='ff-movie-details--title'> { movie.title.toUpperCase() }</div>

            <div className='ff-movie-details--overview'> 
              { movie.overview }
            </div>

            <div className='ff-movie-details--info'>
              <span> { stars } </span>
              <span> { movie.release_date && movie.release_date.replace(/-/g, '/') } </span>
              <span> Rated adult: { movie.rated_adult ? ' Yes' : ' No' }</span>
              <span> { `${movie.vote_count} votes` } </span>
            </div>

            <div>
              { movie.genres.map((genre, i) => {
                return (
                  <div className='ff-movie-details--genre' key={ i }> 
                    <div> { genre.name } </div>
                  </div>
                );
              }) } 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails