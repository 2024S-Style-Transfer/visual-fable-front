'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import useGlobalState from '@/store/globalStore';
import { wait } from '@/utils/time';
import styled from '@emotion/styled';
import { SvgGoogleLogo } from '@/svgs';
import { authenticateUserWithGoogle } from '@/service/user';

const Login: React.FC = () => {
  const { setIsGlobalLoading, setIsLogin } = useGlobalState();

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      return;
    }

    try {
      setIsGlobalLoading(true);

      // FIXME: API 호출로 변경 필요
      // const data = await authenticateUserWithGoogle(credentialResponse.credential);
      // localStorage.setItem('token', data.accessToken);
      setIsLogin(true);

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
