import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Select = styled.div`
  padding: 14px 18px;
  border-radius: 14px;
  background: #f7f7fb;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  cursor: pointer;

  &.s {
    width: 125px;
  }

  &.m {
    width: 244px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.open > svg {
    transform: rotate(180deg);
  }
`;

export const SelectArrow = styled.svg`
  fill: transparent;
  stroke: #000000;

  & > use {
    width: 20px;
    height: 20px;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 52px;

  list-style-type: none;
  padding: 14px 18px;
  margin: 0;

  max-height: 272px;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  z-index: 4;

  &.s {
    width: 125px;
  }

  &.m {
    width: 244px;
  }
`;

export const OptionItem = styled.li`
  color: rgba(18, 20, 23, 0.2);
  font-family: Manrope;
  font-weight: 500;
  line-height: 1.25;
`;
