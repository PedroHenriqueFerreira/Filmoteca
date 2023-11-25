import React, { useEffect, useState } from 'react';
import { CultContainer } from './style';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import Title from '../../components/common/Title';
import Container from '../../components/common/Container';
import { Navigate } from 'react-router-dom';
import axios from '../../services/axios';
import { get } from 'lodash';
import validator from 'validator';
import { toast } from 'react-toastify';

interface Props {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cult = ({ isLogged, setIsLogged }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState('');

  const [cardDate, setCardDate] = useState('');
  const [cardDateError, setCardDateError] = useState('');

  const [cvv, setCvv] = useState('');
  const [cvvError, setCvvError] = useState('');

  const [isCult, setIsCult] = useState(false);

  const loadData = async () => {
    try {
      const result = await axios.get('/usuario/perfil');

      const data = get(result, 'data', {});

      if (data['isCult']) {
        setName(data['cult']['titular']);
        setCardNumber(data['cult']['numero']);
        setCardDate(`${data['cult']['mes']}/${data['cult']['ano']}`);
        setCvv(data['cult']['cvv']);
      }

      setIsCult(data['isCult']);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    let shouldStop = false;

    if (name.length < 2 || name.length > 255) {
      setNameError('O nome do titular precisa ter entre 2 e 255 caracteres');

      shouldStop = true;
    }

    if (!validator.matches(cardNumber, /^\d{4} \d{4} \d{4} \d{4}$/)) {
      setCardNumberError(
        'O número do cartão precisa estar no formato XXXX XXXX XXXX XXXX',
      );

      shouldStop = true;
    }

    if (!validator.matches(cardDate, /^\d{2}\/\d{4}$/)) {
      setCardDateError('A data de validade precisa estar no formato MM/AAAA');

      shouldStop = true;
    }

    if (!validator.matches(cvv, /^\d{3}$/)) {
      setCvvError('O código de segurança precisa ter 3 dígitos');

      shouldStop = true;
    }

    if (shouldStop) {
      setIsLoading(false);

      return;
    }

    try {
      const result = await axios.post('/usuario/assinar', {
        titular: name,
        numero: cardNumber,
        mes: parseInt(cardDate.split('/')[0]),
        ano: parseInt(cardDate.split('/')[1]),
        cvv: parseInt(cvv),
      });

      const data = get(result, 'data', {});

      toast.success(data['message']);

      setIsCult(true);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((err: string) => toast.error(err));
    }

    setIsLoading(false);
  };

  const handleCancel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const result = await axios.delete('/usuario/cancelar');

      const data = get(result, 'data', {});

      toast.success(data['message']);

      setIsCult(false);

      setName('');
      setCardNumber('');
      setCardDate('');
      setCvv('');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((err: string) => toast.error(err));
    }

    setIsLoading(false);
  };

  return !isLogged ? (
    <Navigate replace to="/login" />
  ) : (
    <CultContainer>
      <Container>
        <Title>Visualizar plano Cult</Title>

        <form onSubmit={isCult ? handleCancel : handleSubmit}>
          <Input
            type="text"
            placeholder="Nome do titular:"
            value={name}
            setValue={setName}
            error={nameError}
            setError={setNameError}
            readOnly={isCult}
          />

          <Input
            type="text"
            placeholder="Número do cartão:"
            value={cardNumber}
            setValue={setCardNumber}
            error={cardNumberError}
            setError={setCardNumberError}
            readOnly={isCult}
          />

          <Input
            type="text"
            placeholder="Data de validade:"
            value={cardDate}
            setValue={setCardDate}
            error={cardDateError}
            setError={setCardDateError}
            readOnly={isCult}
          />

          <Input
            type="number"
            placeholder="Código de segurança:"
            value={cvv}
            setValue={setCvv}
            error={cvvError}
            setError={setCvvError}
            min="100"
            max="999"
            readOnly={isCult}
          />

          <Button
            className={isCult ? 'danger' : ''}
            type="submit"
            isLoading={isLoading}
          >
            {isCult ? 'Cancelar' : 'Assinar'} plano
          </Button>
        </form>
      </Container>
    </CultContainer>
  );
};

export default Cult;
