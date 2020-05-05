import React from 'react';

import { useHistory } from 'react-router-dom';
import * as S from './styled';
import Button from '../../components/Button';

const ConfirmData: React.FC = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Title>Detectei seus dados! Você pode confirmar eles abaixo: </S.Title>
      <S.DataContainer>
        <S.Data>Nome: Daniel Coelho da Costa</S.Data>
        <S.Data>RG: 4815162342</S.Data>
        <S.Data>CPF: 342.002.171-42</S.Data>
        <S.Data>Data de nascimento: 19/12/1980</S.Data>
      </S.DataContainer>
      <Button onClick={() => history.push('payment')}>Confirmar dados</Button>
    </S.Container>
  );
};

export default ConfirmData;
