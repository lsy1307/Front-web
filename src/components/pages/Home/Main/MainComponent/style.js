import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
`;
export const LeftContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-end;
  border-right: 1px solid #d6d9dc;
  align-items: flex-start;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.2rem 0.5rem 0.5rem;
  width: 50%;
  gap: 5rem;
`;

export const RightContainer = styled.div`
  width: 25%;
  border-left: 1px solid #d6d9dc;
`;
