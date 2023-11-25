import React, { useEffect, useState } from 'react';

import { HomeContainer } from './styled';

import { Link } from 'react-router-dom';

import Title from '../../components/common/Title';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from '../../services/axios';
import { get } from 'lodash';

interface Movie {
  id: number;
  titulo: string;
  sinopse: string;
  ano: number;
  poster: string;
  avaliacao: number;
  genero: string;
}

const Home = () => {
  const responsive = {
    desktop_medium: {
      breakpoint: { max: 2560, min: 1440 },
      items: 8,
    },
    laptop_large: {
      breakpoint: { max: 1440, min: 1300 },
      items: 7,
    },
    laptop_medium: {
      breakpoint: { max: 1300, min: 1024 },
      items: 6,
    },
    laptop_small: {
      breakpoint: { max: 1024, min: 970 },
      items: 5,
    },
    tablet_large: {
      breakpoint: { max: 970, min: 768 },
      items: 4,
    },
    tablet_medium: {
      breakpoint: { max: 768, min: 600 },
      items: 3,
    },
    tablet_small: {
      breakpoint: { max: 600, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);

  const loadRecommendedMovies = async () => {
    try {
      const result = await axios.get('/filme/recomendacoes');

      const data = get(result, 'data', {});

      setRecommendedMovies(data['filmes']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      setRecommendedMovies([]);
    }
  };

  const loadPopularMovies = async () => {
    try {
      const result = await axios.get('/filme/populares');

      const data = get(result, 'data', {});

      setPopularMovies(data['filmes']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      setPopularMovies([]);
    }
  };

  const loadFavoriteMovies = async () => {
    try {
      const result = await axios.get('/filme/favoritos');

      const data = get(result, 'data', {});

      setFavoriteMovies(data['filmes']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      setFavoriteMovies([]);
    }
  };

  const loadWatchedMovies = async () => {
    try {
      const result = await axios.get('/filme/assistidos');

      const data = get(result, 'data', {});

      setWatchedMovies(data['filmes']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      setWatchedMovies([]);
    }
  };

  useEffect(() => {
    loadPopularMovies();
    loadRecommendedMovies();
    loadFavoriteMovies();
    loadWatchedMovies();
  }, []);

  return (
    <HomeContainer>
      <span className="cover"></span>

      <div className="content">
        {recommendedMovies.length > 0 && (
          <article>
            <Title>Recomendados</Title>
            <Carousel responsive={responsive}>
              {recommendedMovies.map((movie) => (
                <Link
                  key={movie.id}
                  className="movie"
                  to={`/movie/${movie.id}`}
                >
                  <img src={movie.poster} />
                  <h3>{movie.titulo}</h3>
                </Link>
              ))}
            </Carousel>
          </article>
        )}

        {popularMovies.length > 0 && (
          <article>
            <Title>Populares</Title>
            <Carousel responsive={responsive}>
              {popularMovies.map((movie) => (
                <Link
                  key={movie.id}
                  className="movie"
                  to={`/movie/${movie.id}`}
                >
                  <img src={movie.poster} />
                  <h3>{movie.titulo}</h3>
                </Link>
              ))}
            </Carousel>
          </article>
        )}

        {favoriteMovies.length > 0 && (
          <article>
            <Title>Favoritos</Title>
            <Carousel responsive={responsive}>
              {favoriteMovies.map((movie) => (
                <Link
                  key={movie.id}
                  className="movie"
                  to={`/movie/${movie.id}`}
                >
                  <img src={movie.poster} />
                  <h3>{movie.titulo}</h3>
                </Link>
              ))}
            </Carousel>
          </article>
        )}

        {watchedMovies.length > 0 && (
          <article>
            <Title>Assistidos</Title>
            <Carousel responsive={responsive}>
              {watchedMovies.map((movie) => (
                <Link
                  key={movie.id}
                  className="movie"
                  to={`/movie/${movie.id}`}
                >
                  <img src={movie.poster} />
                  <h3>{movie.titulo}</h3>
                </Link>
              ))}
            </Carousel>
          </article>
        )}
      </div>
    </HomeContainer>
  );
};

export default Home;
