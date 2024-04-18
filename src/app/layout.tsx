import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import localFont from 'next/font/local';
import GlobalStyle from '@/theme/GlobalStyles';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'visual fable',
  description: '당신의 시각적 이야기를 만들어 드립니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
