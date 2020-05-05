import React from 'react';

import { useHistory } from 'react-router-dom';
import * as S from './styled';
import Button from '../../components/Button';

const ConfirmPayment: React.FC = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Title>Detectei seus dados! Você pode confirmar eles abaixo: </S.Title>
      <S.DataContainer>
        <S.Data>Núm. Cartão: **** **** **** 5678</S.Data>
        <S.Data>Validade: 12/29</S.Data>
        <S.Data>Nome: GUSTAVO J FREITAS</S.Data>
      </S.DataContainer>
      <Button onClick={() => history.push('finish')}>
        Confirmar e finalizar compra
      </Button>
    </S.Container>
  );
};

export default ConfirmPayment;
