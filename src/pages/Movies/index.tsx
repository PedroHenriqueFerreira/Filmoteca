import React, { useEffect, useState } from 'react';

import { MoviesContainer } from './styled';
import { ButtonLink } from '../../components/Button';

import Title from '../../components/common/Title';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import axios from '../../services/axios';
import { get } from 'lodash';
import { toast } from 'react-toastify';

interface Movie {
  id: number;
  titulo: string;
  poster: string;
}

interface Genero {
  genero: string;
  filmes: Movie[];
}

const Movies = () => {
  const [generos, setGeneros] = useState<Genero[]>([]);

  const loadData = async () => {
    try {
      const result = await axios.get('/filme/generos');

      const data = get(result, 'data', []);

      setGeneros(data['generos']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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

  return (
    <MoviesContainer>
      <span className="cover"></span>

      <div className="content">
        <Title>Adicione um filme</Title>
        <ButtonLink className="add" to="/movies/add">
          Adicionar novo filme
        </ButtonLink>

        {generos.map((genero) => (
          <article key={genero.genero}>
            <Title>{genero.genero}</Title>

            <Carousel responsive={responsive}>
              {genero.filmes.map((filme) => (
                <Link
                  className="movie"
                  to={`/movie/${filme.id}`}
                  key={filme.id}
                >
                  <img src={filme.poster} />
                  <h3>{filme.titulo}</h3>
                </Link>
              ))}
            </Carousel>
          </article>
        ))}
      </div>
    </MoviesContainer>
  );
};

export default Movies;
