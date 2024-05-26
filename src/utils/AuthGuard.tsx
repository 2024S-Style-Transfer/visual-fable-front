'use client';

import useGlobalStore from '@/store/globalStore';
import { Fragment, useEffect } from 'react';

const AuthGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isLogin, setIsLogin } = useGlobalStore();

  const handleSetIsLogin = () => {
    if (typeof window === 'undefined') {
      return;
    }

    if (localStorage.getItem('token') && !isLogin) {
      setIsLogin(true);
    }
    if (!localStorage.getItem('token') && isLogin) {
      setIsLogin(false);
    }
  };

  handleSetIsLogin();

  useEffect(() => {
    window.addEventListener('storage', handleSetIsLogin);

    return () => {
      window.removeEventListener('storage', handleSetIsLogin);
    };
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
