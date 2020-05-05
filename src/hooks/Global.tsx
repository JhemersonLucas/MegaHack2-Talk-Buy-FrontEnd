import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import RecordRTC from 'recordrtc';
import { useHistory } from 'react-router-dom';
import BoxSpeech from '../components/BoxSpeech';

import { useToast } from './Toast';

import api from '../services/api';

interface GlobalData {
  addResults(products: Product[]): void;
  products: Product[];
  startRecord(): void;
  stopRecord(): void;
  noResult: boolean;
  texto?: string;
  isRecording: boolean;
  addCart(product: Product): void;
  remCart(id: string): void;
  productsCart: Product[];
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
  const toast = useToast();

  const [products, setProducts] = useState<Product[]>(() => {
    const p = localStorage.getItem('@MegaHack-results');
    return p ? JSON.parse(p) : ([] as Product[]);
  });
  const [productsCart, setProductsCart] = useState<Product[]>(() => {
    const p = localStorage.getItem('@MegaHack-cart');
    return p ? JSON.parse(p) : ([] as Product[]);
  });
  // audio

  const [recorder, setRecorder] = useState(Object);
  const [isRecording, setRecording] = useState(false);
  const [stream, setStream] = useState<MediaStream>(new MediaStream());
  const [noResult, setNoResult] = useState(false);
  const [texto, setTexto] = useState(undefined);

  const startRecord = async (): Promise<void> => {
    setTexto(undefined);
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
    try {
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
    } catch (err) {
      console.log(err);
      toast.addToast({
        title: 'Ops :(',
        type: 'error',
        description: 'Nós precisamos que vc tente novamente',
      });
    }
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
    localStorage.setItem('@MegaHack-results', JSON.stringify(listResults));
  }, []);

  const addCart = useCallback(
    (product: Product) => {
      setProductsCart([...productsCart, product]);
      localStorage.setItem(
        '@MegaHack-cart',
        JSON.stringify([...productsCart, product]),
      );
    },
    [productsCart],
  );

  const remCart = useCallback(
    (id: string) => {
      const restante = productsCart.filter(product => product.id !== id);
      setProductsCart(restante);
      localStorage.setItem('@MegaHack-cart', JSON.stringify(restante));
    },
    [productsCart],
  );

  return (
    <GlobalContext.Provider
      value={{
        products,
        addResults,
        startRecord,
        stopRecord,
        noResult,
        texto,
        isRecording,
        addCart,
        remCart,
        productsCart,
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
