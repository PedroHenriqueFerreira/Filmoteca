import React, { useState } from 'react';
import { LoginContainer } from './style';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  return (
    <LoginContainer>
      <Container>
        <Title>Faça seu login</Title>

        <form
          action=""
          onSubmit={async (e) => {
            e.preventDefault();

            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setEmailError('O email precisa de no mínimo 6 caracteres');

            setIsLoading(false);
          }}
        >
          <Input
            type="text"
            placeholder="Digite seu email:"
            value={email}
            setValue={setEmail}
            error={emailError}
            setError={setEmailError}
          />
          <Input
            type="password"
            placeholder="Digite sua senha:"
            value={password}
            setValue={setPassword}
            error={passwordError}
            setError={setPasswordError}
          />

          <Button type="submit" isLoading={isLoading}>
            Entrar
          </Button>

          <Paragraph>
            Não possui conta?{' '}
            <ButtonLink to="/register" className="text nospacing">
              Fazer cadastro
            </ButtonLink>
          </Paragraph>
        </form>
      </Container>
    </LoginContainer>
  );
};

export default Login;
