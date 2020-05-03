import React from 'react';

import Header from '../../components/Header';

import * as S from './styled';

const BaseLayout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default BaseLayout;
