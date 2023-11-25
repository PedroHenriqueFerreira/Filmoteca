import React, { useState } from 'react';
import { RegisterContainer } from './style';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';

import validator from 'validator';
import axios from '../../services/axios';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ isLogged, setIsLogged }: Props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [password2, setPassword2] = useState('');
  const [password2Error, setPassword2Error] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    let shouldStop = false;

    if (name.length < 2 || name.length > 100) {
      setNameError('O apelido precisa ter entre 2 e 100 caracteres');

      shouldStop = true;
    }

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

    if (password2 !== password) {
      setPassword2Error('As senhas não coincidem');

      shouldStop = true;
    }

    if (shouldStop) {
      setIsLoading(false);

      return;
    }

    try {
      const result = await axios.post('/usuario/register', {
        apelido: name,
        email,
        senha: password,
      });

      const data = get(result, 'data', {});

      toast.success(data['message']);

      navigate('/login');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((err: string) => toast.error(err));
    }
  };

  return isLogged ? (
    <Navigate replace to="/" />
  ) : (
    <RegisterContainer>
      <Container>
        <Title>Faça seu cadastro</Title>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Digite seu apelido:"
            value={name}
            setValue={setName}
            error={nameError}
            setError={setNameError}
          />

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

          <Input
            type="password"
            placeholder="Confirme sua senha:"
            value={password2}
            setValue={setPassword2}
            error={password2Error}
            setError={setPassword2Error}
          />

          <Button type="submit" isLoading={isLoading}>
            Cadastrar
          </Button>

          <Paragraph>
            Já possui uma conta?{' '}
            <ButtonLink to="/login" className="text nospacing">
              Fazer login
            </ButtonLink>
          </Paragraph>
        </form>
      </Container>
    </RegisterContainer>
  );
};

export default Register;
