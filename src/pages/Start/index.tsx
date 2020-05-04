import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useGlobal } from '../../hooks/Global';

import MicrophoneButton from '../../components/MicrophoneButton';
import * as S from './styles';
import api from '../../services/api';

const Start: React.FC = () => {
  const [noResult, setNoResult] = useState(false);
  const global = useGlobal();
  const no = global.noResult;
  const termoPesquisa = global.texto;
  const { isRecording } = global;

  const history = useHistory();

  useEffect(() => {
    if (termoPesquisa && !isRecording)
      history.push({
        pathname: '/results',
        search: `?speech=${termoPesquisa}`,
      });
    api.get('chatbot');
  }, [termoPesquisa, isRecording]);

  return (
    <S.Container>
      <S.TitleContainer>
        Bem vindo a nova experiência em compras online.
      </S.TitleContainer>
      <S.SubtitleContainer>O que vamos comprar hoje?</S.SubtitleContainer>
      <MicrophoneButton onClick={() => global.startRecord()} />
      {no ? (
        <S.NoResult>
          Desculpa, mas não conseguimos entender! Tenta mais uma vez, por favor?
        </S.NoResult>
      ) : null}
    </S.Container>
  );
};

export default Start;
