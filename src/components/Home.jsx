// src/components/Home.js
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import tmdbApi from '../api';
import './Home.css'; // Importamos los estilos del carrusel y la cuadrícula
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await tmdbApi.get('/movie/popular');
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  // Configuración de react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostrar 3 imágenes a la vez en pantallas grandes
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Mostrar 2 imágenes a la vez en pantallas medianas
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Mostrar 1 imagen a la vez en dispositivos móviles
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  return (
    <div>
      <header>
        <div className="contenedor">
          <img className="logotipo" src="src/assets/img/logo.png"></img>
          <nav>
            <a href="#" className="activo">Inicio</a>
            <a href="#">Series</a>
            <a href="#">Películas</a>
          </nav>
        </div>
      </header>
      <div className="pelicula-principal">
        <div className="contenedor">
          <h1 className="titulo">Título de la Película</h1>
          <p className="descripcion">Descripción de la película...</p>
          <button className="boton"><i className="fas fa-play"></i>Reproducir</button>
          <button className="boton">Más información</button>
        </div>
      </div>
      <h1>Top Películas</h1>
      <Slider {...settings} className="carrete">
        {movies.map((movie) => (
          <div key={movie.id} className="carrete-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Slider>
      <h1>Películas Populares</h1>
      <div className="grid-container">
        {movies.map((movie) => (
          <div key={movie.id} className="grid-item">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
