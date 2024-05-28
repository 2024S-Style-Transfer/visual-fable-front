'use client';

import useGlobalStore from '@/store/globalStore';
import { Fragment, useEffect } from 'react';

const AuthGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setIsLogin } = useGlobalStore();

  const handleSetIsLogin = () => {
    if (typeof window === 'undefined') {
      return;
    }

    setIsLogin(!!localStorage.getItem('token'));
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
