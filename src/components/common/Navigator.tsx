import React from 'react';
import styled from '@emotion/styled';
import { shadowOpts } from './styled';
import { ColorTheme } from '../../theme/theme';
import { SvgMainLogo } from '@/svgs';

const Navigator = () => {
  return (
    <Nav>
      <Logo><SvgMainLogo/></Logo>
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
  position: absolute;
  left: 7.6%;
`;
const NavText = styled.a`
  font-size: 1.125rem;
  margin-right: 1.3%;
`;
export default Navigator;
