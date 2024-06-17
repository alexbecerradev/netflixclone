// src/api.js
import axios from 'axios';

const API_KEY = 'b5632a42ffa490dea865a5954ea71a73';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdbApi;
