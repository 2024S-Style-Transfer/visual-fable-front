'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import useGlobalState from '@/store/globalStore';
import styled from '@emotion/styled';
import { SvgGoogleLogo } from '@/svgs';
import { authenticateUserWithGoogle, getUserInfo } from '@/service/user';

const Login: React.FC = () => {
  const { setIsGlobalLoading, setIsLogin, setUserData } = useGlobalState();

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      return;
    }

    try {
      setIsGlobalLoading(true);

      const { accessToken } = await authenticateUserWithGoogle(credentialResponse.credential);
      localStorage.setItem('token', accessToken);

      const userData = await getUserInfo();
      setUserData(userData);

      setIsLogin(true);
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
