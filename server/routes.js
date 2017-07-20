const axios = require('axios');
const api_key = '5b19221d20b929615d236692cea743e4';
const baseUrl = 'https://api.themoviedb.org/3';

module.exports = (app) => {

  app.get('/movies', (req, res) => {
    let route = `${baseUrl}/movie/popular`;
    const params = {
      api_key,
      page: req.query.page || 1
    }
    if (req.query.title && req.query.title.length) {
      route = `${baseUrl}/search/movie`;
      params.query = req.query.title;
    }
    axios.get(route, { params })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
  });

  app.get('/movies/:id', (req, res) => {
    axios.get(`${baseUrl}/movie/${req.params.id}`, {
      params: { api_key }
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
  });


  app.get('/search', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: { 
        api_key,
        query: req.query.title,
        page: req.query.page || 1
      }
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
  });

}