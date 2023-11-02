import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemMainWrapper = styled.div`
  width: 100%;
`;

export const ItemImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 268px;

  margin-bottom: 14px;

  border-radius: 14px;

  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );

  overflow: hidden;
  z-index: 2;
`;

export const ItemImg = styled.img``;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 9px;
  margin-bottom: 8px;
`;

export const ItemTitle = styled.h3`
  color: #121417;

  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
`;
export const ItemModel = styled.span`
  color: #3470ff;
`;

export const ItemPrice = styled.span`
  color: #121417;
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.5;
`;

export const ItemDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
`;


export const ItemBtnFavorite = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  padding: 0;

  display: block;
  width: 18px;
  height: 18px;

  background-color: transparent;

  border: none;

  cursor: pointer;
  z-index: 3;

  &.active > svg {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;

export const ItemIcon = styled.svg`
  fill: transparent;
  stroke: #ffffff;

  & > use {
    width: 18px;
    height: 18px;
  }
`;