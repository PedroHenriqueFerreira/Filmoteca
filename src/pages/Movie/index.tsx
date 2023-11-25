import React, { useEffect, useState } from 'react';

import { MovieContainer } from './styled';

import { Link, useLoaderData, useParams } from 'react-router-dom';

import Title from '../../components/common/Title';
import Paragraph from '../../components/common/Paragraph';
import { Button } from '../../components/Button';

import {
  RiEyeFill,
  RiEyeLine,
  RiHeart2Fill,
  RiHeart2Line,
  RiAccountCircleFill,
} from 'react-icons/ri';
import { Input } from '../../components/Input';
import axios from '../../services/axios';
import { get } from 'lodash';
import { toast } from 'react-toastify';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Comentario {
  id: number;
  texto: string;
  usuario_id: number;
  created_at: string;

  Usuario: {
    apelido: string;
  };
}

const Movie = ({ isLogged, setIsLogged }: Props) => {
  const { id } = useParams();

  const [assistido, setAssistido] = useState(false);
  const [favorito, setFavorito] = useState(false);

  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState('');

  const [comments, setComments] = useState<Comentario[]>([]);

  const [comment, setComment] = useState('');

  const loadData = async () => {
    try {
      const result = await axios.get(`/filme/${id}`);

      const data = get(result, 'data', {});

      setName(data['filme']['titulo']);
      setYear(data['filme']['ano']);
      setGenre(data['filme']['genero']);
      setSynopsis(data['filme']['sinopse']);
      setRating(data['filme']['avaliacao']);
      setPoster(data['filme']['poster']);

      setComments(data['filme']['Comentarios']);

      if (isLogged) {
        const result2 = await axios.get('/usuario/perfil');

        const data2 = get(result2, 'data', {});

        const usuarioId = data2['id'];

        const assistidos = data['filme']['Assistes'];
        const favoritos = data['filme']['Favorita'];

        setAssistido(
          assistidos
            .map((i: Record<string, number>) => i['usuario_id'])
            .includes(usuarioId),
        );

        setFavorito(
          favoritos
            .map((i: Record<string, number>) => i['usuario_id'])
            .includes(usuarioId),
        );
      }
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error: string) => toast.error(error));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAssistido = async () => {
    try {
      const result = await axios.post(`/filme/assistir/${id}`);

      const data = get(result, 'data', {});

      setAssistido(!assistido);

      toast.success(data['message']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error: string) => toast.error(error));
    }
  };

  const handleFavorito = async () => {
    try {
      const result = await axios.post(`/filme/favoritar/${id}`);

      const data = get(result, 'data', {});

      setFavorito(!favorito);

      toast.success(data['message']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error: string) => toast.error(error));
    }
  };

  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await axios.post(`/filme/comentar/${id}`, {
        texto: comment,
      });

      const data = get(result, 'data', {});

      toast.success(data['message']);

      setComment('');

      loadData();
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error: string) => toast.error(error));
    }
  };

  return (
    <MovieContainer>
      <span className="cover"></span>
      <div className="content">
        <div className="title">
          <Title>{name}</Title>

          <div className="options">
            {isLogged && (
              <>
                <Button
                  className={`text ${favorito ? 'active' : ''}`}
                  onClick={handleFavorito}
                >
                  <div>
                    <RiHeart2Line />
                    <RiHeart2Fill />
                  </div>
                </Button>
                <Button
                  className={`text ${assistido ? 'active' : ''}`}
                  onClick={handleAssistido}
                >
                  <div>
                    <RiEyeLine />
                    <RiEyeFill />
                  </div>
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="movie">
          <img src={poster} alt={name} />

          <Paragraph className="data">
            <div className="line">
              <strong>Nome: </strong> <span>{name}</span>
            </div>
            <div className="line">
              <strong>Ano de lançamento: </strong> <span>{year}</span>
            </div>
            <div className="line">
              <strong>Genero: </strong> <span>{genre}</span>
            </div>
            <div className="line">
              <strong>Sinopse: </strong>
              <span>{synopsis}</span>
            </div>

            <div className="line">
              <strong>Avaliação: </strong> <span>{rating} / 10</span>
            </div>
          </Paragraph>
        </div>

        {isLogged && (
          <>
            <Title>Comentários</Title>

            <form onSubmit={handleComment}>
              <Input value={comment} setValue={setComment} />
              <Button type="submit">Comentar</Button>
            </form>

            <div className="comments">
              {comments.map((comment) => (
                <Paragraph className="comment" key={comment.id}>
                  <div className="row">
                    <span className="username">
                      <RiAccountCircleFill /> {comment.Usuario.apelido}
                    </span>
                    <span className="date">
                      {new Date(comment.created_at).toLocaleString()}
                    </span>
                  </div>

                  <span className="text">{comment.texto}</span>
                </Paragraph>
              ))}
            </div>
          </>
        )}
      </div>
    </MovieContainer>
  );
};

export default Movie;
