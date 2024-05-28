'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import useGlobalState from '@/store/globalStore';
import { wait } from '@/utils/time';
import styled from '@emotion/styled';
import { SvgGoogleLogo } from '@/svgs';
import { authenticateUserWithGoogle, getUserInfo } from '@/service/user';
import { MOCK_USER_DATA } from '@/mock/data';

const Login: React.FC = () => {
  const { setIsGlobalLoading, setIsLogin, setUserData } = useGlobalState();

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      return;
    }

    try {
      setIsGlobalLoading(true);

      // FIXME: API 호출로 변경 필요
      // const { accessToken } = await authenticateUserWithGoogle(credentialResponse.credential);
      // localStorage.setItem('token', accessToken);

      // const userData = await getUserInfo();
      // setUserData(userData);

      localStorage.setItem('token', credentialResponse.credential);
      setIsLogin(true);
      setUserData(MOCK_USER_DATA);

      await wait(1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGlobalLoading(false);
    }
  };

  return (
    <LoginWrapper>
      <SvgGoogleLogo />

      <GoogleLogin
        type="standard"
        shape="pill"
        auto_select={false}
        onSuccess={handleLogin}
        onError={() => {
          console.log('Login Failed');
          setIsGlobalLoading(false);
        }}
      />
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  text-align: center;

  svg {
    margin-bottom: 10px;
  }
`;

export default Login;
