'use client';

import { getUserInfo } from '@/service/user';
import useGlobalStore from '@/store/globalStore';
import { Fragment, useEffect } from 'react';

const AuthGuard: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { setIsLogin, userData, setUserData } = useGlobalStore();

  const handleSetUserData = async (): Promise<boolean> => {
    try {
      const userInfo = await getUserInfo();
      setUserData(userInfo);

      return true;
    } catch (error) {
      localStorage.removeItem('token');
      setUserData(null);

      return false;
    }
  };

  const handleSetIsLogin = async () => {
    if (typeof window === 'undefined') {
      return;
    }
    // token이 없으면 로그아웃 처리
    if (!localStorage.getItem('token')) {
      setUserData(null);
      setIsLogin(false);

      return;
    }

    // token, userData가 있으면 로그인 처리
    if (!!userData) {
      setIsLogin(true);
      return;
    }

    // token이 있고 userData가 없으면 userData를 가져와서 로그인 처리
    const isSuccess = await handleSetUserData();
    setIsLogin(isSuccess);
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
