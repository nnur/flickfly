import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,
  headers: {'Content-Type': 'application/json'}
});



function getMovies({ page, title }) {
  return axiosInstance({
      method: 'GET',
      url: `/movies/?page=${page}&title=${title}`,
  }).then(response => {
    return response.data
  });
}

function searchMoviesByTitle({ page, title }) {
  return axiosInstance({
      method: 'GET',
      url: `/search/?page=${page}&title=${title}`
  }).then(response => response.data);
}

function getMovie({ id }) {
  return axiosInstance({
      method: 'GET',
      url: `/movies/${id}`
  }).then(response => response.data);
}

export { 
  getMovies,
  getMovie,
  searchMoviesByTitle
}