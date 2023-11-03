import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  width: 280px;
  padding: 32px 16px 32px 32px;

  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: rgba(18, 20, 23, 0.05);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  transition: 300ms right ease-in-out;

  &.open {
    right: 0;
  }
  &.close {
    right: 208px;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NavigationLink = styled(NavLink)`
  max-width: 160px;
  text-decoration: none;
  font-family: Manrope;
  font-weight: 600;
  font-size: 20px;

  border-radius: 4px;
  color: #000000;
  padding: 6px 40px;
  background-color: #ffffff;

  &.active {
    background-color: #3470ff;
    color: #ffffff;
  }
`;
