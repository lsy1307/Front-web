import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.6rem;
  align-items: center;
  width: 100%;
`;

export const Title = styled.p`
  color: #0c0d0e;
  font-family: 'Segoe UI';
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.19375rem;
`;

export const Count = styled.p`
  color: #0c0d0e;
  font-family: 'Noto Sans Bengali';
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.38938rem;
`;

export const ShowMore = styled.button`
  color: #323232;
  font-family: 'Noto Sans KR';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 350;
  line-height: normal;
`;
