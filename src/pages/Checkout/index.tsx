import React from 'react';

import * as S from './styled';

const Checkout: React.FC = () => {
  return (
    <S.Container>
      <S.Title>
        Que bom que você chegou aqui e está conseguindo realizar sua compra!
      </S.Title>
      <S.ButtonsContainer>
        <S.ButtonLink to="/login">Já tenho cadastro</S.ButtonLink>
        <S.ButtonLink to="/register">É minha primeira vez aqui</S.ButtonLink>
      </S.ButtonsContainer>
    </S.Container>
  );
};

export default Checkout;
