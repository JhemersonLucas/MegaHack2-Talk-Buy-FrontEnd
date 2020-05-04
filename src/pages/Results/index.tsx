import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import querystring from 'querystring';
import { findByItemName } from '../../services/products';

import * as S from './styled';
import ListItem from '../../components/ListItem';

import { Item } from '../../models/item';

const Results: React.FC = () => {
  const [speech, setSpeech] = useState(
    querystring.parse(useLocation().search.replace('?', '')).speech,
  );
  const [items, setItems] = useState<Item[]>([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const result = findByItemName(String(speech));
    if (result && result.length > 0) {
      setItems(result);
    } else {
      setNoResults(true);
    }
  }, [speech]);

  return (
    <S.Container>
      <S.Title>{`Buscamos por: ${speech}`}</S.Title>
      <S.ListContainer>
        {noResults ? (
          <NoResultComponent />
        ) : (
          items.map(item => (
            <ListItem name={item.nome} image={item.imagem} price={item.preco} />
          ))
        )}
      </S.ListContainer>
    </S.Container>
  );
};

const NoResultComponent: React.FC = () => (
  <>
    <S.EmptyList>Nenhum item encontrado! :(</S.EmptyList>
    <S.BackButton to="/">Tentar novamente</S.BackButton>
  </>
);

export default Results;
