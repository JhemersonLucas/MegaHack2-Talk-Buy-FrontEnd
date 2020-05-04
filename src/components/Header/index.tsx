import React from 'react';

import { Link } from 'react-router-dom';

import * as S from './styles';
import logoImg from '../../assets/logo.svg';
import sacolaImg from '../../assets/sacola.svg';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <Link to="/">
          <img src={logoImg} width={100} alt="Logo" />
        </Link>
        <img src={sacolaImg} alt="Carrinho de compras" />
      </S.Content>
    </S.Container>
  );
};

export default Header;
