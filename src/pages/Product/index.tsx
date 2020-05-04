import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory, NavLink, useLocation } from 'react-router-dom';
import querystring from 'querystring';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useGlobal } from '../../hooks/Global';
import { useToast } from '../../hooks/Toast';

import * as S from './styles';
import Button from '../../components/Button';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const productInfo = {
  name: 'Nome do produto',
  image:
    'https://images-americanas.b2w.io/produtos/01/00/item/133807/7/133807721_1GG.jpg',
  description: `Para você que busca qualidade em som e imagem, a Smart TV da Philips é ideal. Imagens nítidas e som de alto padrão, com excelentes
  recursos que vão atender todas suas expectivas. Com design moderno,
  sofisticada deixará sua sala ainda mais bonita e equipada com estilo
  e bom gosto, conta ainda com portas USB, HDMI e Wi-Fi. Uma televisão
  para garantir visualização em alta definição e comodidade sem sair
  de casa, com toda exclusividade que você merece.`,
};

const Product: React.FC = () => {
  const history = useHistory();
  const global = useGlobal();
  const toast = useToast();
  const query = useQuery();

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const [products, setProducts] = useState(() => global.products);
  const [index, setIndex] = useState(Number(query.get('pid')));

  useEffect(() => {
    if (products.length === 0) {
      toast.addToast({
        title: 'Desculpe :(',
        type: 'error',
        description: 'Produtos não encontrados',
      });
      history.push({ pathname: '/results', search: '?speech=TV' });
    } else if (index == null) {
      toast.addToast({
        title: 'Desculpe :(',
        type: 'error',
        description: 'Produto não encontrado',
      });
      history.goBack();
    } else {
      const i = Number(index);
      if (i == 0) setPrev(false);
      else setPrev(true);
      if (i === products.length - 1) setNext(false);
      else setNext(true);
      console.log(products[index]);
      console.log(index);
    }
  }, [products, index]);

  const proxProduto = useCallback(() => {
    if (next) setIndex(state => Number(state) + 1);
  }, [next]);

  const antProduto = useCallback(() => {
    if (prev) setIndex(state => Number(state) - 1);
  }, [prev]);

  return (
    <S.Container>
      <S.Content>
        <S.Button active={prev} onClick={antProduto}>
          <FiChevronLeft />
        </S.Button>
        {products.length > 0 && (
          <S.SingleProduct>
            <h2>{products[index].title}</h2>
            <S.Img link={products[index].image} />
            <span>
              R$
              <span>{products[index].price}</span>
            </span>
            <Button>EU QUERO!</Button>
            <section>{products[index].description}</section>
          </S.SingleProduct>
        )}

        <S.Button active={next} onClick={proxProduto}>
          <FiChevronRight />
        </S.Button>
        <NavLink to="" onClick={() => history.goBack()}>
          <FiChevronLeft />
          Voltar
        </NavLink>
      </S.Content>
    </S.Container>
  );
};

export default Product;
