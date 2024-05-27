'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ApiMethodCategory, ApiMethodItem, HTTP_METHOD } from '@/types/service';
import { MOCK_API_METHODS } from '@/mock/data';
import { SvgChevronDown } from '@/svgs';
import { css } from '@emotion/react';

const APIMethods: React.FC = () => {
  const [apiCategories, setApiCategories] = useState<ApiMethodCategory[]>([]);

  // FIXME: API 구현 후 수정
  const loadApiCategories = async () => {
    setApiCategories(MOCK_API_METHODS);
  };

  useEffect(() => {
    loadApiCategories();
  }, []);
  return (
    <APIMethodsWrapper>
      <Title>API Docs</Title>

      {apiCategories.map((category) => (
        <CategoryItem key={category.name} {...category} />
      ))}
    </APIMethodsWrapper>
  );
};
const Title = styled.p`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;
const APIMethodsWrapper = styled.section`
  width: 100%;
  box-shadow: 4px 4px 4px 0px #0000001a;
  border-radius: 10px;
  padding: 52px 60px;
`;

const CategoryItem: React.FC<ApiMethodCategory> = ({ name, methods }) => (
  <CategoryItemWrapper>
    <CategoryName>{name}</CategoryName>
    {methods.map((method) => (
      <MethodItem key={method.httpMethod + method.url} {...method} />
    ))}
  </CategoryItemWrapper>
);
const CategoryName = styled.p`
  padding: 8px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const CategoryItemWrapper = styled.div`
  width: 100%;

  & + & {
    margin-top: 32px;
  }
`;

const HTTP_METHOD_COLOR = {
  [HTTP_METHOD.GET]: '#7b89ff',
  [HTTP_METHOD.POST]: '#FEBB70',
  [HTTP_METHOD.PUT]: '#7bff7b',
  [HTTP_METHOD.PATCH]: '#9fa13b',
  [HTTP_METHOD.DELETE]: '#ff7b7b',
} as const;
type MethodColor = (typeof HTTP_METHOD_COLOR)[keyof typeof HTTP_METHOD_COLOR];
const MethodItem: React.FC<ApiMethodItem> = ({ httpMethod, url, example }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MethodItemWrapper key={httpMethod + url}>
      <MethodInfo $methodColor={HTTP_METHOD_COLOR[httpMethod]}>
        <MethodInfoLeft>
          <MethodBadge $methodColor={HTTP_METHOD_COLOR[httpMethod]}>{httpMethod}</MethodBadge>
          <MethodUrl>{url}</MethodUrl>
        </MethodInfoLeft>

        <OpenButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
          <SvgChevronDown />
        </OpenButton>
      </MethodInfo>

      {isOpen && (
        <>
          <ExampleTitle>Example</ExampleTitle>
          <ExampleBox>{example}</ExampleBox>
        </>
      )}
    </MethodItemWrapper>
  );
};

const OpenButton = styled.button<{ $isOpen: boolean }>`
  margin-right: 12px;
  width: 24px;
  height: 24px;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;
const ExampleBox = styled.div`
  width: 100%;
  background-color: #e5e5e5;
  border-radius: 10px;
  padding: 16px;
  white-space: pre;
`;
const ExampleTitle = styled.p`
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;
const MethodUrl = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-left: 12px;
`;
const MethodBadge = styled.div<{ $methodColor: MethodColor }>`
  color: white;
  background-color: ${({ $methodColor }) => $methodColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 36px;
  font-size: 24px;
  font-weight: 600;
`;
const MethodInfoLeft = styled.div`
  display: flex;
  align-items: center;
`;
const MethodInfo = styled.div<{ $methodColor: MethodColor }>`
  border: 1px solid ${({ $methodColor }) => $methodColor};
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MethodItemWrapper = styled.div`
  width: 100%;

  & + & {
    margin-top: 28px;
  }
`;

export default APIMethods;
