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
  padding: 5rem 2rem 5rem 2rem;
  width: 50%;
`;

export const RightContainer = styled.div`
  width: 25%;
  border-left: 1px solid #d6d9dc;
`;
