import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import Toast from '../components/Toast';

interface GlobalData {
  addResults(products: Product[]): void;
  products: Product[];
  addProduct(index: number): void;
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

  const addResults = useCallback((listResults: Product[]) => {
    setProducts(listResults);
    console.log(`Salvo ${listResults.length} produtos`);
  }, []);

  const addProduct = useCallback((index: number) => {
    setIndexProduct(index);
  }, []);

  return (
    <GlobalContext.Provider value={{ products, addResults, addProduct }}>
      {children}
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
