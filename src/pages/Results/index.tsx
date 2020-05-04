import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
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
  const global_ = useGlobal();

  const no = global_.noResult;
  const termoPesquisa = global_.texto;
  const { isRecording } = global_;

  useEffect(() => {
    const result = findByItemName(String(speech));
    if (result && result.length > 0) {
      setItems(result);
      global_.addResults(result);
      setNoResults(false);
    } else {
      setNoResults(true);
    }
  }, [speech]);

  useEffect(() => {
    if (termoPesquisa && !isRecording) setSpeech(termoPesquisa);
  }, [termoPesquisa, isRecording]);

  return (
    <S.Container>
      <header>
        <FiSearch />
        <input onChange={str => setSpeech(str.target.value)} value={speech} />
        <button onClick={() => global_.startRecord()}>
          <FaMicrophone />
        </button>
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
