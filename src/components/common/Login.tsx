'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import useGlobalState from '@/store/globalStore';
import { wait } from '@/utils/time';
import styled from '@emotion/styled';
import { SvgGoogleLogo } from '@/svgs';

const Login: React.FC = () => {
  const { setIsGlobalLoading } = useGlobalState();

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      setIsGlobalLoading(true);

      // FIXME: API 호출로 변경 필요
      await wait(1);
      console.log(credentialResponse);
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
