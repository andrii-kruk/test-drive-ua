import styled from 'styled-components';

export const List = styled.ul`
  max-width: 1184px;

  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;

  margin-left: auto;
  margin-right: auto;

  list-style-type: none;
  padding: 0;
  margin-bottom: 100px;
`;

export const BtnLoadMore = styled.button`
  display: block;
  min-width: 79px;
  margin-left: auto;
  margin-right: auto;

  border: none;
  background-color: transparent;
  
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 1,5;
 
  color: #3470ff;
  text-decoration-line: underline;
  
  cursor: pointer;
`;
