import React, { useState } from 'react';
import { RegisterContainer } from './style';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [password2, setPassword2] = useState('');
  const [password2Error, setPassword2Error] = useState('');

  return (
    <RegisterContainer>
      <Container>
        <Title>Faça seu cadastro</Title>

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
