import React, { useEffect } from 'react';
import { useTransition } from 'react-spring';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
  FiStopCircle,
} from 'react-icons/fi';
import { GiSoundWaves } from 'react-icons/gi';
import { Container, Content } from './styles';
import { useGlobal } from '../../hooks/Global';

interface BoxProps {
  texto?: string;
  style: object;
}

interface BoxContainerProps {
  isRecording: boolean;
  texto?: string;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ isRecording, texto }) => {
  const messages = [{ id: '1', title: 'teste', type: 'success' }];
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <>
      {isRecording ? (
        <Container>
          {messagesWithTransitions.map(({ item, key, props }) => (
            <Box key={key} style={props} texto={texto} />
          ))}
        </Container>
      ) : null}
    </>
  );
};

const Box: React.FC<BoxProps> = ({ texto }) => {
  const global = useGlobal();
  return (
    <Content>
      <GiSoundWaves size={30} />
      <strong> {!texto ? 'Fale agora...' : texto} </strong>

      <button type="button" onClick={() => global.stopRecord()}>
        <FiStopCircle size={30} />
      </button>
    </Content>
  );
};
export default BoxContainer;
