import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { pretendard } from '@/theme/fontsGroup';
import GlobalStyle from '@/theme/GlobalStyles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthGuard from '@/utils/AuthGuard';
import DefaultLayout from '@/components/templates/DefaultLayout';

export const metadata: Metadata = {
  title: 'visual fable',
  description: '당신의 시각적 이야기를 만들어 드립니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleClientId = process.env.GOOGLE_CLIENT_ID!;

  return (
    <html lang="ko">
      <body className={pretendard.className} suppressHydrationWarning={true}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <AuthGuard>
            <StyledComponentsRegistry>
              <GlobalStyle />

              <DefaultLayout>{children}</DefaultLayout>
            </StyledComponentsRegistry>
          </AuthGuard>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
