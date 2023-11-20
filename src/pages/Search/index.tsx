import React from 'react';

import { SearchContainer } from './styled';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import Title from '../../components/common/Title';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

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

  return (
    <SearchContainer>
      <span className="cover"></span>

      <div className="content">
        <Title>Pesquise por um filme</Title>

        <form>
          <Input />
          <Button>Pesquisar filme</Button>
        </form>

        <article>
          <Title>Resultados para {'"Barbie"'}</Title>
          <Carousel responsive={responsive}>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os Mercenários 4</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>A morte te dá parabéns e bla bla bla bla bla bla bla</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>A morte te dá parabéns e bla bla bla bla bla bla bla</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
            <Link className="movie" to="/movie/2">
              <img src="https://picsum.photos/200/298" />
              <h3>Os incríveis (2023)</h3>
            </Link>
          </Carousel>
        </article>
      </div>
    </SearchContainer>
  );
};

export default Search;