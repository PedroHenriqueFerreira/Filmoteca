import React from 'react';
import { ButtonContainer } from './style';
import { LinkProps } from 'react-router-dom';
import { RiLoader4Fill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

interface ButtonLinkProps
  extends LinkProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {}

export const Button = ({ isLoading, ...props }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }

    props.onClick?.(e);
  };

  return (
    <ButtonContainer
      {...props}
      className={`${props.className || 'default'} ${
        isLoading ? 'loading' : ''
      }`}
      onClick={handleClick}
    >
      {props.children}
      {isLoading && <RiLoader4Fill className="loader" />}
    </ButtonContainer>
  );
};

export const ButtonLink = ({ ...props }: ButtonLinkProps) => {
  return (
    <ButtonContainer
      as={NavLink}
      {...props}
      className={`${props.className || 'default'}`}
    />
  );
};
