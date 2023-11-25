import React, { useState } from 'react';
import { AddMovieContainer } from './style';

import validator from 'validator';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';
import axios from '../../services/axios';
import { toast } from 'react-toastify';
import { get } from 'lodash';

const AddMovie = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [poster, setPoster] = useState('');
  const [posterError, setPosterError] = useState('');

  const [avaliacao, setAvaliacao] = useState('');
  const [avaliacaoError, setAvaliacaoError] = useState('');

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const [year, setYear] = useState('');
  const [yearError, setYearError] = useState('');

  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    let shouldStop = false;

    if (title.length < 2 || title.length > 255) {
      shouldStop = true;

      setTitleError('O titulo deve ter entre 2 e 255 caracteres');
    }

    if (poster.length < 2 || poster.length > 255) {
      shouldStop = true;

      setPosterError('O link do poster deve ter entre 2 e 255 caracteres');
    } else if (
      !validator.matches(poster, /http.*\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)
    ) {
      shouldStop = true;

      setPosterError('O link do poster deve ser uma imagem válida');
    }

    if (description.length < 2 || description.length > 2000) {
      shouldStop = true;

      setDescriptionError('A sinopse deve ter entre 2 e 2000 caracteres');
    }

    if (gender.length < 2 || gender.length > 255) {
      shouldStop = true;

      setGenderError('O gênero deve ter entre 2 e 255 caracteres');
    }

    const yearNumber = parseInt(year);

    if (
      !yearNumber ||
      yearNumber < 1888 ||
      yearNumber > new Date().getFullYear()
    ) {
      shouldStop = true;

      setYearError('O ano de lançamento deve ser entre 1888 e o ano atual');
    }

    const avaliacaoNumber = parseInt(avaliacao);

    if (!avaliacaoNumber || avaliacaoNumber < 0 || avaliacaoNumber > 10) {
      shouldStop = true;

      setAvaliacaoError('A avaliação deve ser entre 0 e 10');
    }

    if (shouldStop) {
      setIsLoading(false);

      return;
    }

    try {
      const result = await axios.post('/filme/criar', {
        titulo: title,
        poster,
        sinopse: description,
        genero: gender,
        ano: yearNumber,
        avaliacao: avaliacaoNumber,
      });

      const data = get(result, 'data', {});

      toast.success(data['message']);

      setTitle('');
      setPoster('');
      setDescription('');
      setGender('');
      setYear('');
      setAvaliacao('');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error: string) => toast.error(error));
    }

    setIsLoading(false);
  };

  return (
    <AddMovieContainer>
      <Container>
        <Title>Adicionar novo filme</Title>

        <form onSubmit={handleSubmit}>
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
            placeholder="Digite o link do poster:"
            value={poster}
            setValue={setPoster}
            error={posterError}
            setError={setPosterError}
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
            type="number"
            min="1888"
            max={new Date().getFullYear.toString()}
            placeholder="Digite o ano de lançamento:"
            value={year}
            setValue={setYear}
            error={yearError}
            setError={setYearError}
          />

          <Input
            type="number"
            min="0"
            max="10"
            placeholder="Digite a avalição:"
            value={avaliacao}
            setValue={setAvaliacao}
            error={avaliacaoError}
            setError={setAvaliacaoError}
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
