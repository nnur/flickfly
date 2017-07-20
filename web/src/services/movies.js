import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
});

function getMovies({ page, title }) {
  return axiosInstance({
    method: 'GET',
    url: `/movies/?page=${page}&title=${title}`
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
  getMovie
};
