import React, { Component } from 'react'
import fly from '../../assets/images/fly.png'

class Hero extends Component {
  render () {
    return (
      <div className='ff-hero'>
        <div className='ff-hero-logo'>
          <img src={ fly } alt='' />
        </div>
        <div className='ff-hero-title'>
          FLICK<span>FLY</span>
        </div>
        <div className='ff-hero-subtitle'>
          Search movies with tons of buzz!
        </div>
        <div className='ff-hero-search'>
          <input className='ff-hero-input' placeholder='Search movies...'/>
        </div>
      </div>
    )
  }
}

export default Hero