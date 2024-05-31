'use client';

import { getUserInfo } from '@/service/user';
import useGlobalStore from '@/store/globalStore';
import { Fragment, useEffect } from 'react';

const AuthGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setIsLogin, userData, setUserData } = useGlobalStore();

  const handleSetIsLogin = async () => {
    if (typeof window === 'undefined') {
      return;
    }

    if (!!localStorage.getItem('token')) {
      if (!userData) {
        const userInfo = await getUserInfo();
        setUserData(userInfo);
      }

      setIsLogin(true);
    } else {
      setUserData(null);
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
