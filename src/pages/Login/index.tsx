import React from 'react';

import * as S from './styled';

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Input placeholder="CPF" />
        <S.Input placeholder="Senha" type="password" />
      </S.Form>
    </S.Container>
  );
};

export default Login;
