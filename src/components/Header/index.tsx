import React from 'react';
import LogoImage from '../../assets/LogoImage';
import { HeaderContainer } from './style';
import { ButtonLink } from '../Button';

import {
  RiMovie2Fill,
  RiMovie2Line,
  RiSearch2Fill,
  RiSearch2Line,
  RiHomeFill,
  RiHomeLine,
  RiVipCrown2Fill,
  RiVipCrown2Line,
} from 'react-icons/ri';

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ButtonLink to="/" className="logo text">
          <LogoImage />
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
        {1 ? (
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
        ) : (
          <ul>
            <li>
              <ButtonLink to="/profile" className="profile text">
                <img src="https://unsplash.it/300/300" alt="Profile" />
                <span>Pedro H</span>
              </ButtonLink>
            </li>
          </ul>
        )}
      </nav>
    </HeaderContainer>
  );
};

export default Header;
