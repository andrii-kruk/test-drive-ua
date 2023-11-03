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

  &.xs {
    width: 79px;

    padding: 0;

    margin-left: auto;
    margin-right: auto;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;

    background-color: transparent;
    color: #3470ff;

    text-decoration-line: underline;
  }

  &.xs:hover,
  &.xs:focus {
    color: #0b44cd;
  }

  &.s {
    position: relative;
    top: 14px;
    width: 136px;
    padding: 14px 44px;
  }

  &.m {
    width: 168px;
  }

  &.l {
    width: 274px;
  }
`;
