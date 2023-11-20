import React from 'react';
import { FooterContainer } from './style';
import { ButtonLink } from '../Button';
import Paragraph from '../common/Paragraph';

const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph>&copy; 2023 - Todos os direitos reservados</Paragraph>
    </FooterContainer>
  );
};

export default Footer;
