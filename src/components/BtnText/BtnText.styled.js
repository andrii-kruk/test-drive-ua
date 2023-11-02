import styled from 'styled-components';

export const Button = styled.button`
  display: block;

  padding: 12px 99px;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;

  border: none;
  border-radius: 12px;
  background-color: #3470ff;

  transition: 300ms background-color ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  &.s {
    width: 79px;
    background-color: transparent;
    color: #3470ff;
  }

  &.s:hover,
  &.s:focus {
    color: #0b44cd;
  }

  &.m {
    width: 168px;
  }

  &.l {
    width: 274px;
  }
`;
