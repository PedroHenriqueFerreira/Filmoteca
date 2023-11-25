import React, { useEffect, useState } from 'react';

import { SearchContainer } from './styled';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

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

const Search = () => {
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

  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState('');

  const [text, setText] = useState('');

  const loadMovies = async () => {
    try {
      setText(search);

      const result = await axios.get(`/filme/filtrar?titulo=${search}`);

      const data = get(result, 'data', []);

      setMovies(data['filmes']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error: string) => toast.error(error));
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <SearchContainer>
      <span className="cover"></span>

      <div className="content">
        <Title>Pesquise por um filme</Title>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            loadMovies();
          }}
        >
          <Input value={search} setValue={setSearch} />
          <Button>Pesquisar filme</Button>
        </form>

        {movies.length > 0 && (
          <article>
            <Title>
              Resultados para {'"'}
              {text}
              {'"'}
            </Title>
            <Carousel responsive={responsive}>
              {movies.map((movie) => (
                <Link
                  className="movie"
                  to={`/movie/${movie.id}`}
                  key={movie.id}
                >
                  <img src={movie.poster} />
                  <h3>{movie.titulo}</h3>
                </Link>
              ))}
            </Carousel>
          </article>
        )}
      </div>
    </SearchContainer>
  );
};

export default Search;
