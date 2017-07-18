import React, { Component } from 'react'
import Nav from './Nav';
import Hero from './Hero';
import MoviesGrid from './MoviesGrid';
import { Redirect } from 'react-router-dom';


class MainPage extends Component {

  onMovieSelected(movieId) {
    this.props.history.push(`/movies/${movieId}`)
  }

  render () {
    return (
      <div className='ff-main-page'>
        <Nav />
        <Hero />
        <MoviesGrid onMovieSelected={this.onMovieSelected.bind(this)} />
        <div className='ff-footer'>
          <div className='ff-footer--copyright'>Copyright 2017 Flickfly</div>
          <div className='ff-footer--privacy'>Privacy Policy & Terms of Service</div>
        </div>
      </div>
    )
  }
}

export default MainPage