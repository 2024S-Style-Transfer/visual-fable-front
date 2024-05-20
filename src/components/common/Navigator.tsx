import React from 'react';
import styled from '@emotion/styled';
import { shadowOpts } from './styled';
import { ColorTheme } from '../../theme/theme';

const Navigator = () => {
  return (
    <Nav>
      <Logo />
      <NavText>Home</NavText>
      <NavText>About Us</NavText>
      <NavText>API Docs</NavText>
    </Nav>
  );
};
const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91.7%;
  height: 80px;
  border-radius: 20px;
  ${shadowOpts}
`;

const Logo = styled.div`
  width: 7.6%;
  height: 16px;
  background-image: '../../../public/logo.png';
  background-color: ${ColorTheme.tempColor};
  position: absolute;
  left: 7.6%;
`;
const NavText = styled.a`
  font-size: 1.125rem;
  margin-right: 1.3%;
`;
export default Navigator;
