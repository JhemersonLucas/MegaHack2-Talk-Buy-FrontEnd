import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import querystring from 'querystring';
import { findByItemName } from '../../services/products';

import * as S from './styled';
import { ListItem } from '../../components/ListItem/styled';

const Results: React.FC = () => {
  const [speech, setSpeech] = useState(
    querystring.parse(useLocation().search.replace('?', '')).speech,
  );

  useEffect(() => {
    findByItemName(String(speech));
  }, [speech]);

  return (
    <S.Container>
      <S.Title>{`Buscamos por: ${speech}`}</S.Title>
      <S.ListContainer>
        <ListItem />
        <ListItem />
      </S.ListContainer>
    </S.Container>
  );
};

export default Results;
