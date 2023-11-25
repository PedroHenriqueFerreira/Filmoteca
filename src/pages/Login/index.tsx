import React, { useState } from 'react';
import { LoginContainer } from './style';

import validator from 'validator';
import { get } from 'lodash';

import { toast } from 'react-toastify';

import axios from '../../services/axios';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';
import { Navigate } from 'react-router-dom';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ isLogged, setIsLogged }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    let shouldStop = false;

    if (!validator.isEmail(email)) {
      setEmailError('Este email é inválido');

      shouldStop = true;
    }

    if (password.length < 8 || password.length > 50) {
      setPasswordError('A senha precisa ter entre 8 e 50 caracteres');

      shouldStop = true;
    } else if (!validator.isStrongPassword(password)) {
      setPasswordError('Escolha uma senha mais forte');

      shouldStop = true;
    }

    if (shouldStop) {
      setIsLoading(false);

      return;
    }

    try {
      const result = await axios.post('/usuario/login', {
        email,
        senha: password,
      });

      const data = get(result, 'data', {});

      toast.success(data['message']);

      localStorage.setItem('token', data['token']);
      axios.defaults.headers.Authorization = `Bearer ${data['token']}`;

      setIsLogged(true);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((err: string) => toast.error(err));
    }

    setIsLoading(false);
  };

  return isLogged ? (
    <Navigate replace to="/" />
  ) : (
    <LoginContainer>
      <Container>
        <Title>Faça seu login</Title>

        <form onSubmit={handleSubmit}>
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
