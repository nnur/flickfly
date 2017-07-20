import React, { Component } from 'react'
import Nav from './Nav';
import Hero from './Hero';
import MoviesGrid from './MoviesGrid';
import * as api from './../../services/movies';

class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
      page: 0,
      title: '',
      isButtonLoading: false
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies(event) {
    let { page, title, movies } = this.state;
    if (event && event.type === 'keyup') {
      title = event.target.value;
      movies = [];
      page = 1;
    } else {
      page = page + 1;
      this.setState({ isButtonLoading: true });
    }
    api.getMovies({ page, title }).then(res => {
      this.setState({
        movies: [...movies, ...res.results],
        page,
        title,
        isButtonLoading: false
      });
    });
  }

  onMovieSelected(movieId) {
    this.props.history.push(`/movies/${movieId}`);
  }

  render() {
    return (
      <div className='ff-main-page'>
        <Nav />
        <Hero onChange={ this.getMovies.bind(this) }/>
        <MoviesGrid 
          onMovieSelected={ this.onMovieSelected.bind(this) } 
          movies={ this.state.movies }
          showMore={ this.getMovies.bind(this) }
          isButtonLoading={ this.state.isButtonLoading }
        />
        <div className='ff-footer'>
          <div className='ff-footer--copyright'>Copyright 2017 Flickfly</div>
          <div className='ff-footer--privacy'>Privacy Policy & Terms of Service</div>
        </div>
      </div>
    )
  }
}

export default MainPage