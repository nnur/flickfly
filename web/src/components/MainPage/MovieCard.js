import React, { Component } from 'react';
import star from '../../assets/images/star.svg';
import missingPoster from '../../assets/images/poster-missing.png';

class MovieCard extends Component {

  getStars() {
    const rating = Math.round(this.props.movie.vote_average / 2);
    let stars = [];
    for (let i = 0; i < rating; i += 1) {
      stars.push(<img src={star} key={i} className="ff-movie-rating" alt="" />);
    }
    if (stars.length === 0) {
      stars = 'Unrated';
    }
    return stars;
  }

  handleImgError(event) {
    event.target.setAttribute('src', missingPoster);
  }

  render() {
    const stars = this.getStars();
    const posterPath = this.props.movie.poster_path ? 
        `https://image.tmdb.org/t/p/w342/${this.props.movie.poster_path}` : missingPoster;
    
    return (
      <div
        className="ff-movie-card--wrapper"
        onClick={() => { this.props.onClick(this.props.movie.id); }}
      >
        <div className="ff-movie-card">
          <div className="ff-movie-img--wrapper">
            <img
              onError={this.handleImgError}
              src={posterPath}
              className="ff-movie-img"
              alt=""
            />
          </div>
          <div className="ff-movie-name">
            {this.props.movie.title}
          </div>
          <div className="ff-movie-score">
            {stars}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
