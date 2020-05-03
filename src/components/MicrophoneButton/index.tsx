import React from 'react';

import * as S from './styles';

interface Props {
  onClick: Function;
}

const MicrophoneButton: React.FC<Props> = props => {
  return (
    <S.Button onClick={() => props.onClick()}>
      <S.Container>
        <S.Icon />
      </S.Container>
    </S.Button>
  );
};

export default MicrophoneButton;
