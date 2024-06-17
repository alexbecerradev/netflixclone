// src/components/Home.js
import React, { useEffect, useState } from 'react';
import tmdbApi from '../api';
import MovieList from './MovieList';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await tmdbApi.get('/movie/popular');
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
