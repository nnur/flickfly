import React, { Component } from 'react'
import fly from '../../assets/images/fly.png'

class Nav extends Component {
  render () {
    return (
      <div className='ff-nav'>
        <div className='ff-nav-logo'>
          <img src={ fly } alt='' />
        </div>
        <div className='ff-nav-links'>
          <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> About </a>
          <a href='mailto:23naila.n@gmail.com'> Contact </a>
        </div>
      </div>
    )
  }
}

export default Nav