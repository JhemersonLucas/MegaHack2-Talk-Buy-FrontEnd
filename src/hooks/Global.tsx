import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import RecordRTC from 'recordrtc';
import { useHistory } from 'react-router-dom';
import BoxSpeech from '../components/BoxSpeech';

import api from '../services/api';

interface GlobalData {
  addResults(products: Product[]): void;
  products: Product[];
  addProduct(index: number): void;
  startRecord(): void;
  stopRecord(): void;
  noResult: boolean;
  texto?: string;
  isRecording: boolean;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  description?: string;
}

const GlobalContext = createContext<GlobalData>({} as GlobalData);

export const GlobalProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [indexProduct, setIndexProduct] = useState(0);
  // audio

  const [recorder, setRecorder] = useState(Object);
  const [isRecording, setRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream>(new MediaStream());
  const [noResult, setNoResult] = useState(false);
  const [texto, setTexto] = useState(undefined);

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
        setTexto(speech);
        setTimeout(() => {
          setRecording(false);
          setNoResult(false);
        }, 1500);
      } else {
        setNoResult(true);
        setRecording(false);
      }

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

  const addResults = useCallback((listResults: Product[]) => {
    setProducts(listResults);
    console.log(`Salvo ${listResults.length} produtos`);
  }, []);

  const addProduct = useCallback((index: number) => {
    setIndexProduct(index);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        products,
        addResults,
        addProduct,
        startRecord,
        stopRecord,
        noResult,
        texto,
        isRecording,
      }}
    >
      {children}
      <BoxSpeech isRecording={isRecording} texto={texto} />
    </GlobalContext.Provider>
  );
};

export function useGlobal(): GlobalData {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      'O contexto Global deve estar dentro de um Provider válido',
    );
  }

  return context;
}
