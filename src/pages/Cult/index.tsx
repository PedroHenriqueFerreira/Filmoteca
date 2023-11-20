import React, { useState } from 'react';
import { CultContainer } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';

const Cult = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <CultContainer>
      <Container>
        <Title>Assinar plano Cult</Title>

        <form>
          <Input
            type="text"
            placeholder="Seu nome completo:"
            value="Pedro Ferreira"
            readOnly
          />

          <Input
            type="text"
            placeholder="Seu CPF:"
            value="123.456.789-10"
            readOnly
          />

          <Input
            type="text"
            placeholder="Número do cartão:"
            value="1234 5678 9012 3456"
            readOnly
          />

          <Input
            type="text"
            placeholder="Data de validade:"
            value="12/2025"
            readOnly
          />

          <Input
            type="text"
            placeholder="Código de segurança:"
            value="123"
            readOnly
          />

          <Input type="text" placeholder="Valor:" value="R$ 9,90" readOnly />

          <Button>Modificar plano</Button>

          <Button className="danger light">Cancelar plano</Button>
        </form>
      </Container>
    </CultContainer>
  );
};

export default Cult;
