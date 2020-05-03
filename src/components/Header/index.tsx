import React from 'react';

import * as S from './styles';
import logoImg from '../../assets/logo.svg';
import sacolaImg from '../../assets/sacola.svg';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} width={100} />
        <img src={sacolaImg} />
      </S.Content>
    </S.Container>
  );
};

export default Header;