import React, { useState } from 'react';
import RecordRTC from 'recordrtc';
import * as speech from '@google-cloud/speech';
import fs from 'fs';

import * as S from './styles';
import MicrophoneButton from '../../components/MicrophoneButton';
import api from '../../services/api';

const Start: React.FC = () => {
  const [recorder, setRecorder] = useState(Object);
  const [isRecording, setRecording] = useState(false);

  const startRecord = async (): Promise<void> => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    const tempRecorder = RecordRTC(stream, {
      type: 'audio',
      mimeType: 'audio/wav',
      recorderType: RecordRTC.StereoAudioRecorder,
      numberOfAudioChannels: 1,
    });
    tempRecorder.startRecording();
    setRecorder(tempRecorder);
    setRecording(true);
  };

  const handleRecognize = async (buffer: string): Promise<void> => {
    console.log('retorno', buffer);
    const response = await api.post('chatbot', { data: buffer });
    console.log(response);
  };

  const stopRecord = (): void => {
    recorder.stopRecording(async () => {
      console.log(recorder);

      const data = new FormData();
      data.append('file', recorder.getBlob());

      const res = await api.post('/chatbot', data);
      console.log(res.data);
      // handleRecognize(recorder.buffer);
      setRecording(false);
    });
  };

  const handleRecord = (): void => {
    if (!isRecording) {
      startRecord();
    } else {
      stopRecord();
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        Bem vindo a nova experiência em compras online.
      </S.TitleContainer>
      <S.SubtitleContainer>O que vamos comprar hoje?</S.SubtitleContainer>
      <MicrophoneButton onClick={() => handleRecord()} />
    </S.Container>
  );
};

export default Start;
