import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import MovieDetails from './MovieDetails';

const App = () => (
  <Router>
    <span className="routes-wrapper">
      <Route exact path="/" component={MainPage} />
      <Route path="/movies/:id" component={MovieDetails} />
    </span>
  </Router>
  );

export default App;
