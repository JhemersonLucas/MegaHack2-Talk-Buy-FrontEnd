import React from 'react';

import { useHistory } from 'react-router-dom';
import * as S from './styled';
import Button from '../../components/Button';

const Finish: React.FC = () => {
  const history = useHistory();

  return (
    <S.Container>
      <S.Title>Você finalizou sua compra de forma fácil e rápida!</S.Title>
      <Button onClick={() => history.push('/')}>Realizar outra compra</Button>
    </S.Container>
  );
};

export default Finish;
