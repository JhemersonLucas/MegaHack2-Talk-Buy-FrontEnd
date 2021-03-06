import React from 'react';

import { useHistory } from 'react-router-dom';
import RGBack from '../../assets/rg-verso.png';

import * as S from './styled';
import Button from '../../components/Button';

const Register: React.FC = () => {
  const history = useHistory();

  const nextStep = (): void => {
    history.push('confirm-data');
  };

  return (
    <S.Container>
      <S.Title>
        Encaixe o verso do seu RG no limite indicado para leitura dos dados
      </S.Title>
      <S.ImageContainer>
        <S.Image src={RGBack} />
      </S.ImageContainer>
      <Button onClick={() => nextStep()}>Próximo passo</Button>
    </S.Container>
  );
};

export default Register;
