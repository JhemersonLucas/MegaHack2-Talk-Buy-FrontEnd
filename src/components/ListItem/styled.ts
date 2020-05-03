import styled from 'styled-components';

export const ListItem = styled.div`
  background-color: #999;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
`;

export const ItemImage = styled.img`
  height: 100px;
  border-radius: 10px;
`;

export const ItemDetail = styled.div`
  display: flex;
  width: 40%;
  align-items: start;
  flex-direction: column;
  justify-content: space-around;
`;

export const ItemName = styled.span`
  color: #fff;
  font-size: 2em;
  font-weight: 500;
`;

export const ItemPriceContainer = styled.div`
  flex-direction: row;
`;

export const ItemPriceSymbol = styled.span`
  color: #fe0000;
  font-size: 1.5em;
  margin-right: 5px;
  font-weight: 500;
`;

export const ItemPrice = styled.span`
  color: #fe0000;
  font-size: 2.5em;
  font-weight: 800;
`;
