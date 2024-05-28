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

  useEffect(() => {
    handleSetIsLogin();

    window.addEventListener('storage', handleSetIsLogin);

    return () => {
      window.removeEventListener('storage', handleSetIsLogin);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default AuthGuard;
