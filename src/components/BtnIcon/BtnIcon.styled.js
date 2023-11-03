import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;

  display: block;

  background-color: transparent;

  border: none;

  cursor: pointer;
  z-index: 3;

  &.s,
  &.s > svg > use {
    width: 18px;
    height: 18px;
  }

  &.s > svg {
    position: absolute;
    top: 14px;
    right: 14px;
    fill: transparent;
    stroke: #ffffff;
  }

  &.s.active > svg {
    fill: #3470ff;
    stroke: #3470ff;
  }

  &.m,
  &.m > svg > use {
    width: 20px;
    height: 20px;
  }

  &.m > svg {
    fill: transparent;
    stroke: #000000;
  }

  &.m.open > svg {
    transform: rotate(180deg);
  }

  &.l {
  }

  &.xl,
  &.xl > svg > use {
    width: 26px;
    height: 26px;
  }
`;
