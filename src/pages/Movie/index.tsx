import React from 'react';

import { MovieContainer } from './styled';

import { Link } from 'react-router-dom';

import Title from '../../components/common/Title';

const Movie = () => {
  return (
    <MovieContainer>
      <span className="cover"></span>
    </MovieContainer>
  );
};

export default Movie;
