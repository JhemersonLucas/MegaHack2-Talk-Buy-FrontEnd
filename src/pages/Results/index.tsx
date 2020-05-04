import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, NavLink, useHistory } from 'react-router-dom';
import querystring from 'querystring';
import { FiSearch } from 'react-icons/fi';
import { FaMicrophone } from 'react-icons/fa';
import { findByItemName } from '../../services/products';

import { useGlobal } from '../../hooks/Global';

import * as S from './styled';
import ListItem from '../../components/ListItem';

import { Item } from '../../models/item';

const Results: React.FC = () => {
  const [speech, setSpeech] = useState(
    querystring.parse(useLocation().search.replace('?', '')).speech,
  );
  const [items, setItems] = useState<Item[]>([]);
  const [noResults, setNoResults] = useState(false);

  const history = useHistory();
  const global = useGlobal();

  useEffect(() => {
    const result = findByItemName(String(speech));
    if (result && result.length > 0) {
      setItems(result);
      global.addResults(result);
      setNoResults(false);
    } else {
      setNoResults(true);
    }
  }, [speech]);

  return (
    <S.Container>
      <header>
        <FiSearch />
        <input onChange={str => setSpeech(str.target.value)} value={speech} />
        <FaMicrophone />
      </header>
      <S.ListContainer>
        {noResults ? (
          <NoResultComponent />
        ) : (
          items.map((item, index) => (
            <button
              onClick={() =>
                history.push({
                  pathname: '/product',
                  search: `?pid=${index}`,
                })}
              key={item.id}
            >
              <ListItem
                name={item.title}
                image={item.image}
                price={item.price}
              />
            </button>
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
