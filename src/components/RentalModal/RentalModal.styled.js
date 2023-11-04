import styled from 'styled-components';

export const RentalContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 461px;
  height: 248px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;

  border-radius: 14px;
  background-color: #f3f3f2;

  overflow: hidden;
`;

export const RentalTitle = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  margin: 0 0 8px 0;

  & span {
    color: #3470ff;
  }
`;

export const RentalInfoText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  line-height: 1.5;

  margin: 0 0 14px 0;
`;

export const RentalDescription = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0 0 24px 0;
`;

export const RentalSubtitle = styled.h3`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 0 8px 0;
`;

export const RentalAccessories = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin: 0 0 4px 0;
`;
export const RentalFunctionalities = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  margin: 0 0 4px 0;
`;

export const ConditionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Condition = styled.p`
  display: inline-block;
  padding: 7px 14px;
  gap: 8px;
  border-radius: 35px;
  background-color: #f9f9f9;

  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
  margin: 0;
  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;

export const RentalLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background-color: #3470ff;

  color: #ffffff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;

  transition: 300ms background-color ease-in-out;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
