import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../app/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

// 배너 영역 적용 글꼴
const RedHatText = localFont({
  src: '../app/fonts/RedHatText-VariableFont_wght.ttf',
  display: 'swap',
  weight: '300 700',
});

export { pretendard, RedHatText };
