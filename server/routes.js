const axios = require('axios');
const express = require('express');

const router = express.Router();
const api_key = '5b19221d20b929615d236692cea743e4';
const baseUrl = 'https://api.themoviedb.org/3';

router.get('/movies', (req, res) => {
  let route = `${baseUrl}/movie/popular`;
  const params = {
    api_key,
    page: req.query.page || 1
  };
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

router.get('/movies/:id', (req, res) => {
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

module.exports = router;
