import React, { useEffect, useState } from 'react';
import { HeaderContainer } from './style';
import { ButtonLink } from '../Button';

import logo from '../../assets/logo.png';

import {
  RiMovie2Fill,
  RiMovie2Line,
  RiSearch2Fill,
  RiSearch2Line,
  RiHomeFill,
  RiHomeLine,
  RiVipCrown2Fill,
  RiVipCrown2Line,
  RiAccountCircleFill,
} from 'react-icons/ri';
import axios from '../../services/axios';
import { get } from 'lodash';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isLogged, setIsLogged }: Props) => {
  const [name, setName] = useState('');

  const loadName = async () => {
    const token = localStorage.getItem('token');

    if (token === null) {
      setName('');
    }

    try {
      const result = await axios.get('/usuario/perfil');

      const data = get(result, 'data', {});

      setName(data['apelido']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);
    }
  };

  useEffect(() => {
    loadName();
  }, [isLogged]);

  return (
    <HeaderContainer>
      <nav>
        <ButtonLink to="/" className="logo text">
          <img src={logo} />
        </ButtonLink>

        <ul className="routes">
          <li>
            <ButtonLink to="/" className="text">
              <div>
                <RiHomeLine className="line" />
                <RiHomeFill className="fill" />
              </div>
              <span>Home</span>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink to="/movies" className="text">
              <div>
                <RiMovie2Line className="line" />
                <RiMovie2Fill className="fill" />
              </div>
              <span>Filmes</span>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink to="/search" className="text">
              <div>
                <RiSearch2Line className="line" />
                <RiSearch2Fill className="fill" />
              </div>
              <span>Pesquisar</span>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink to="/cult" className="text">
              <div>
                <RiVipCrown2Line className="line" />
                <RiVipCrown2Fill className="fill" />
              </div>
              <span>Plano Cult</span>
            </ButtonLink>
          </li>
        </ul>
        {/* eslint-disable-next-line no-constant-condition*/}
        {isLogged ? (
          <ul>
            <li>
              <ButtonLink to="/profile" className="profile text">
                <RiAccountCircleFill />
                <span>{name}</span>
              </ButtonLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <ButtonLink to="/login">Entrar</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register" className="text">
                Cadastrar
              </ButtonLink>
            </li>
          </ul>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Header;
