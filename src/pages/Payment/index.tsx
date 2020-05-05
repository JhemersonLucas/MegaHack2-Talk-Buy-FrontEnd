import React from 'react';

import { useHistory } from 'react-router-dom';
import CreditCard from '../../assets/cartao-credito.png';

import * as S from './styled';
import Button from '../../components/Button';

const Payment: React.FC = () => {
  const history = useHistory();

  const nextStep = (): void => {
    history.push('confirm-payment');
  };

  return (
    <S.Container>
      <S.Title>
        Encaixe cartão de crédito no limite indicado para leitura dos dados
      </S.Title>
      <S.ImageContainer>
        <S.Image src={CreditCard} />
      </S.ImageContainer>
      <Button onClick={() => nextStep()}>Próximo passo</Button>
    </S.Container>
  );
};

export default Payment;
