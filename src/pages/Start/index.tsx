import React from 'react';

import * as S from './styles';
import MicrophoneButton from '../../components/MicrophoneButton';

const Start: React.FC = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        Bem vindo a nova experiência em compras online.
      </S.TitleContainer>
      <S.SubtitleContainer>O que vamos comprar hoje?</S.SubtitleContainer>
      <MicrophoneButton />
    </S.Container>
  );
};

export default Start;
