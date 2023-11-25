import React, { useEffect, useState } from 'react';
import { UpdateContainer } from './style';

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

const Update = ({ isLogged, setIsLogged }: Props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [oldPassword, setOldPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const loadData = async () => {
    setIsLoading(true);

    try {
      const result = await axios.get('/usuario/perfil');

      const data = get(result, 'data', {});

      setName(data['apelido']);
      setEmail(data['email']);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

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

    if (oldPassword === '' && password !== '') {
      setOldPasswordError('Preencha a senha atual');

      shouldStop = true;
    } else if (oldPassword !== '' && password === '') {
      setPasswordError('Preencha a senha nova');

      shouldStop = true;
    } else if (oldPassword !== '') {
      if (oldPassword.length < 8 || oldPassword.length > 50) {
        setOldPasswordError('A senha precisa ter entre 8 e 50 caracteres');

        shouldStop = true;
      }

      if (password.length < 8 || password.length > 50) {
        setPasswordError('A senha nova precisa ter entre 8 e 50 caracteres');

        shouldStop = true;
      } else if (!validator.isStrongPassword(password)) {
        setPasswordError('Escolha uma senha mais forte');

        shouldStop = true;
      }
    }

    if (shouldStop) {
      setIsLoading(false);

      return;
    }

    try {
      const body: Record<string, string> = {
        apelido: name,
        email,
      };

      if (oldPassword !== '') {
        body['senha'] = password;
        body['senha_atual'] = oldPassword;
      }

      const result = await axios.put('/usuario/atualizar', body);

      const data = get(result, 'data', {});

      toast.success(data['message']);

      navigate('/profile');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((err: string) => toast.error(err));
    }

    setIsLoading(false);
  };

  return !isLogged ? (
    <Navigate replace to="/login" />
  ) : (
    <UpdateContainer>
      <Container>
        <Title>Atualizar dados</Title>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Atualize seu apelido:"
            value={name}
            setValue={setName}
            error={nameError}
            setError={setNameError}
          />

          <Input
            type="text"
            placeholder="Atualize seu email:"
            value={email}
            setValue={setEmail}
            error={emailError}
            setError={setEmailError}
          />

          <Input
            type="password"
            placeholder="Senha atual:"
            value={oldPassword}
            setValue={setOldPassword}
            error={oldPasswordError}
            setError={setOldPasswordError}
          />

          <Input
            type="password"
            placeholder="Atualize sua senha:"
            value={password}
            setValue={setPassword}
            error={passwordError}
            setError={setPasswordError}
          />

          <Button type="submit" isLoading={isLoading}>
            Atualizar
          </Button>

          <ButtonLink to="/profile" className="light">
            Voltar
          </ButtonLink>
        </form>
      </Container>
    </UpdateContainer>
  );
};

export default Update;
