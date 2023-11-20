import React from 'react';

import { MovieContainer } from './styled';

import { Link } from 'react-router-dom';

import Title from '../../components/common/Title';
import Paragraph from '../../components/common/Paragraph';
import { Button } from '../../components/Button';

import {
  RiEyeFill,
  RiEyeLine,
  RiHeart2Fill,
  RiHeart2Line,
} from 'react-icons/ri';
import { Input } from '../../components/Input';

const Movie = () => {
  return (
    <MovieContainer>
      <span className="cover"></span>
      <div className="content">
        <div className="title">
          <Title>Barbie</Title>

          <div className="options">
            <Button className="text">
              <div>
                <RiHeart2Line />
                <RiHeart2Fill />
              </div>
            </Button>
            <Button className="text">
              <div>
                <RiEyeLine />
                <RiEyeFill />
              </div>
            </Button>
          </div>
        </div>

        <div className="movie">
          <img
            src="https://www.themoviedb.org/t/p/w220_and_h330_face/9Jmd1OumCjaXDkpllbSGi2EpJvl.jpg"
            alt="Barbie"
          />

          <Paragraph className="data">
            <div className="line">
              <strong>Nome: </strong> <span>Barbie</span>
            </div>
            <div className="line">
              <strong>Ano de lançamento: </strong> <span>2023</span>
            </div>
            <div className="line">
              <strong>Genero: </strong> <span>Aventura</span>
            </div>
            <div className="line">
              <strong>Sinopse: </strong>

              <span>
                Na Barbielândia - o mundo mágico das Barbies - todas as versões
                da boneca vivem em completa harmonia e suas únicas preocupações
                são encontrar as melhores roupas para passear com as amigas e
                curtir intermináveis festas. Porém, a Barbie Estereotipada
                (Margot Robbie) começa a perceber que talvez sua vida não seja
                tão perfeita assim, questionando-se sobre o sentido de sua
                existência e alarmando suas companheiras. Logo, sua vida no
                mundo cor-de-rosa começa a mudar e, eventualmente, ela vai parar
                no mundo real.Forçada a viver ali, Barbie precisa lutar com as
                dificuldades de não ser mais apenas uma boneca. Pelo menos, a
                moça está acompanhada de seu fiel e amado Ken (Ryan Gosling),
                que, ao contrário dela, parece cada vez mais fascinado pela vida
                no novo mundo.
              </span>
            </div>

            <div className="line">
              <strong>Avaliação: </strong> <span>3.4</span>
            </div>
          </Paragraph>
        </div>

        <Title>Comentários</Title>

        <form>
          <Input />
          <Button>Comentar</Button>
        </form>

        <div className="comments">
          <Paragraph className="comment">
            <div className="row">
              <span className="username">Sigma Mal Amado</span>
              <span className="date">12 jul 2023</span>
            </div>

            <span className="text">
              Lixo, um dos piores fimes já feitos em toda historia, tenho
              certeza que a diretora odeia homens, pura lacração e ideologia da
              nova geração
            </span>
          </Paragraph>
          <Paragraph className="comment">
            <div className="row">
              <span className="username">Sigma Mal Amado</span>
              <span className="date">12 jul 2023</span>
            </div>

            <span className="text">
              Lixo, um dos piores fimes já feitos em toda historia, tenho
              certeza que a diretora odeia homens, pura lacração e ideologia da
              nova geração
            </span>
          </Paragraph>
        </div>
      </div>
    </MovieContainer>
  );
};

export default Movie;
