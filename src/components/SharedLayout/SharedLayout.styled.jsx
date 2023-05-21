import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const GlobalContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: 1px solid darkslategrey;
  margin-bottom: 12px;
  padding: 15px 0;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  text-decoration: none;
  gap: 12px;
`;

export const Navlink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: black;

  &.active {
    color: #indigo;
    border-bottom: 2px dashed #5cd3a9;
  }

  &:hover,
  &:focus {
    color: indigo;
  }
`;
