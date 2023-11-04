import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 4;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`;

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 5;
  box-sizing: border-box;
  min-width: 541px;
  padding: 40px;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;
