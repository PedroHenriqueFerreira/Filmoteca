import React, { useState } from 'react';
import { AddMovieContainer } from './style';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';

const AddMovie = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const [year, setYear] = useState('');
  const [yearError, setYearError] = useState('');

  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  return (
    <AddMovieContainer>
      <Container>
        <Title>Adicionar novo filme</Title>

        <form
          action=""
          onSubmit={async (e) => {
            e.preventDefault();

            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setIsLoading(false);
          }}
        >
          <Input
            type="text"
            placeholder="Digite o titulo:"
            value={title}
            setValue={setTitle}
            error={titleError}
            setError={setTitleError}
          />

          <Input
            type="text"
            placeholder="Digite a sinopse:"
            value={description}
            setValue={setDescription}
            error={descriptionError}
            setError={setDescriptionError}
          />

          <Input
            type="text"
            placeholder="Digite o gênero:"
            value={gender}
            setValue={setGender}
            error={genderError}
            setError={setGenderError}
          />

          <Input
            type="text"
            placeholder="Digite o ano de lançamento:"
            value={year}
            setValue={setYear}
            error={yearError}
            setError={setYearError}
          />

          <Button type="submit" isLoading={isLoading}>
            Adicionar filme
          </Button>
        </form>
      </Container>
    </AddMovieContainer>
  );
};

export default AddMovie;
