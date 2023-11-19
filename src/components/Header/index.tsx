import React from 'react';
import LogoImage from '../../assets/LogoImage';
import { HeaderContainer } from './style';
import { ButtonLink } from '../Button';

import {
  RiMovie2Fill,
  RiMovie2Line,
  RiHeart3Fill,
  RiHeart3Line,
  RiHomeFill,
  RiHomeLine,
  RiQuestionAnswerFill,
  RiQuestionAnswerLine,
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
            <ButtonLink to="/contents" className="text">
              <div>
                <RiMovie2Line className="line" />
                <RiMovie2Fill className="fill" />
              </div>
              <span>Filmes</span>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink to="/books" className="text">
              <div>
                <RiHeart3Line className="line" />
                <RiHeart3Fill className="fill" />
              </div>
              <span>Favoritos</span>
            </ButtonLink>
          </li>
          <li>
            <ButtonLink to="/q&a" className="text">
              <div>
                <RiQuestionAnswerLine className="line" />
                <RiQuestionAnswerFill className="fill" />
              </div>
              <span>Torne-se Cult</span>
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
                Criar conta
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
