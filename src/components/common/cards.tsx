import styled from '@emotion/styled';
import { shadowOpts } from './styled';

//Card 배경 div
const Card = styled.div`
  width: 48.8%;
  height: 200px;
  padding: 52px 4.8%;
  border-radius: 20px;
  ${shadowOpts}
`

const CardContents = styled.div`
  width: 46.3%;
  font-size: 1.125rem;
  float:left;
`

// Card 제목 텍스트
const CardTitle = styled.div`
  font-weight: bold;
  margin-bottom: 24px;
`

const CardText = styled.div`
`
const CardImage = styled.div`
  float:right;
  background-color: pink;

`

export {Card, CardContents, CardTitle, CardText, CardImage}