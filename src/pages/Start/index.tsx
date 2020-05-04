import React, { useState } from 'react';
import RecordRTC from 'recordrtc';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import MicrophoneButton from '../../components/MicrophoneButton';
import * as S from './styles';

const Start: React.FC = () => {
  const [recorder, setRecorder] = useState(Object);
  const [isRecording, setRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream>(new MediaStream());
  const [noResult, setNoResult] = useState(false);
  const history = useHistory();

  const startRecord = async (): Promise<void> => {
    const tempStream = await navigator.mediaDevices.getUserMedia({
      video: false,
      audio: true,
    });
    const tempRecorder = RecordRTC(tempStream, {
      type: 'audio',
      mimeType: 'audio/wav',
      recorderType: RecordRTC.StereoAudioRecorder,
      numberOfAudioChannels: 1,
    });
    tempRecorder.startRecording();
    setRecorder(tempRecorder);
    setRecording(true);
    setStream(tempStream);
  };

  const stopRecord = (): void => {
    recorder.stopRecording(async () => {
      const formData = new FormData();
      formData.append('file', recorder.getBlob());
      const { data } = await api.post('/chatbot', formData);
      const speech = data?.results[0]?.alternatives[0]?.transcript;

      console.log(speech);
      if (speech) {
        history.push({ pathname: '/results', search: `?speech=${speech}` });
      } else {
        setNoResult(true);
      }

      setRecording(false);
      stream.getAudioTracks().forEach(track => track.stop());
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
    <>
      <S.TitleContainer>
        Bem vindo a nova experiência em compras online.
      </S.TitleContainer>
      <S.SubtitleContainer>O que vamos comprar hoje?</S.SubtitleContainer>
      <MicrophoneButton onClick={() => handleRecord()} />
      {noResult ? (
        <S.NoResult>
          Desculpa, mas não conseguimos entender! Tenta mais uma vez, por favor?
        </S.NoResult>
      ) : null}
    </>
  );
};

export default Start;
