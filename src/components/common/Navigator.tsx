import React from 'react';
import styled from '@emotion/styled';
import { shadowOpts } from './styled';
import { ColorTheme } from '../../theme/theme';
import { useRouter, usePathname } from 'next/navigation';

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

const Navigator = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (path: string) => {
    if (path === pathname) {
      return;
    }

    router.push(path);
  };

  return (
    <Nav>
      <Logo />

      {NAV_ITEMS.map((item) => (
        <NavText key={item.name} onClick={() => handleNavClick(item.path)}>
          {item.name}
        </NavText>
      ))}
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
  ${shadowOpts};
  cursor: pointer;
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
