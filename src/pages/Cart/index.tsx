import React, { useState, useEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import querystring from 'querystring';

import { FiTrash } from 'react-icons/fi';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useGlobal } from '../../hooks/Global';
import { useToast } from '../../hooks/Toast';

import * as S from './styles';
import Button from '../../components/Button';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Product: React.FC = () => {
  const history = useHistory();
  const global = useGlobal();
  const toast = useToast();
  const query = useQuery();

  const products = global.productsCart;

  return (
    <S.Container>
      <S.Content>
        <S.SubtitleContainer>Itens no seu carrinho:</S.SubtitleContainer>
        {products.map(product => (
          <S.SingleProduct>
            <S.Img link={product.image} />
            <div>
              <h2>{product.title}</h2>

              <span>
                R$
                <span>{product.price}</span>
              </span>
            </div>
            <section>
              <span>1 UN</span>
              <button onClick={() => global.remCart(product.id)}>
                <FiTrash />
              </button>
            </section>
          </S.SingleProduct>
        ))}

        {products.length === 0 && (
          <div>
            <button onClick={() => history.push({ pathname: '/' })}>
              <MdRemoveShoppingCart size={30} />
              Seu carrinho está vazio :(
              <br />
{' '}
Clique aqui para realizar uma pesquisa.
</button>
          </div>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Product;
