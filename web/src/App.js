import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.js';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <span className='routes-wrapper'>
         <Route exact path="/" component={ MainPage }/>
         <Route path="/movies/:id" component={ MovieDetails }/>
        </span>
       </Router>
    );
  }
}

export default App;
