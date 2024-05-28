import React from 'react';
import styled from '@emotion/styled';
import { shadowOpts } from './styled';
import { SvgMainLogo } from '@/svgs';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'API Docs',
    path: '/methods',
  },
] as const;

const Navigator = () => (
  <Nav>
    <Logo>
      <SvgMainLogo />
    </Logo>

    {NAV_ITEMS.map((item) => (
      <NavText key={item.name} href={item.path}>
        {item.name}
      </NavText>
    ))}
  </Nav>
);
const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91.7%;
  height: 80px;
  border-radius: 20px;
  ${shadowOpts};
`;

const Logo = styled.div`
  position: absolute;
  left: 7.6%;
`;
const NavText = styled(Link)`
  font-size: 1.125rem;
  margin-right: 1.3%;
`;

export default Navigator;
