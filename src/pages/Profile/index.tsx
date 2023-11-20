import React, { useState } from 'react';
import { ProfileContainer } from './style';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import Paragraph from '../../components/common/Paragraph';

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('Pedro H');

  const [email, setEmail] = useState('pedro@gmail.com');

  const [password, setPassword] = useState('**********');

  const [type, setType] = useState('Pipoca');

  return (
    <ProfileContainer>
      <Container>
        <Title>Visualizar Perfil</Title>

        <form>
          <Input
            type="text"
            placeholder="Seu apelido:"
            value={name}
            setValue={setName}
            readOnly
          />

          <Input
            type="text"
            placeholder="Seu email:"
            value={email}
            setValue={setEmail}
            readOnly
          />

          <Input
            type="password"
            placeholder="Sua senha:"
            value={password}
            setValue={setPassword}
            readOnly
          />

          <Input
            type="text"
            placeholder="Tipo de usuário:"
            value={type}
            setValue={setType}
            readOnly
          />

          <Button className="danger">Sair</Button>
        </form>
      </Container>
    </ProfileContainer>
  );
};

export default Profile;
