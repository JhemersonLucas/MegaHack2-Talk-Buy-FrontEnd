import React from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import * as S from './styles';
import Header from '../../components/Header';
import Button from '../../components/Button';

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
  return (
    <S.Container>
      <Header />
      <S.Content>
        <button>
          <FiChevronLeft />
        </button>
        <S.SingleProduct>
          <h2>Nome do produto</h2>
          <S.Img link={productInfo.image} />
          <span>
            R$
            <span>999,90</span>
          </span>
          <Button>EU QUERO!</Button>
          <section>{productInfo.description}</section>
        </S.SingleProduct>
        <button>
          <FiChevronRight />
        </button>
      </S.Content>
    </S.Container>
  );
};

export default Product;
