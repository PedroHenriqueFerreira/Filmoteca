import React, { useEffect, useState } from 'react';
import { ProfileContainer } from './style';

import { Button, ButtonLink } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import { Navigate } from 'react-router-dom';
import axios from '../../services/axios';
import { get } from 'lodash';
import { toast } from 'react-toastify';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Profile = ({ isLogged, setIsLogged }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('Pedro H');

  const [email, setEmail] = useState('pedro@gmail.com');

  const [type, setType] = useState('Pipoca');

  const loadData = async () => {
    setIsLoading(true);

    try {
      const result = await axios.get('/usuario/perfil');

      const data = get(result, 'data', {});

      setName(data['apelido']);
      setEmail(data['email']);
      setType(data['isCult'] ? 'Cult' : 'Pipoca');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.Authorization;

    setIsLogged(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);

    try {
      const result = await axios.delete('/usuario/deletar');

      const data = get(result, 'data', {});

      toast.success(data['message']);

      handleLogout();
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }

    setIsLoading(false);
  };

  return !isLogged ? (
    <Navigate replace to="/login" />
  ) : (
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
            type="text"
            placeholder="Tipo de usuário:"
            value={type}
            setValue={setType}
            readOnly
          />

          <ButtonLink to="/profile/update">Atualizar dados</ButtonLink>

          <Button
            className="danger logout"
            onClick={handleLogout}
            type="button"
          >
            Sair
          </Button>

          <Button
            type="button"
            className="danger light"
            onClick={handleDelete}
            isLoading={isLoading}
          >
            Apagar conta
          </Button>
        </form>
      </Container>
    </ProfileContainer>
  );
};

export default Profile;
