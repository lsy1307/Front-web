import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 0.1rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  border-top: 3px solid #e7700d;
`;
export const Title = styled.div`
  width: 15%;
  text-decoration: none;
  color: #0c0d0e;
  font-size: 2.0625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.19375rem;
`;
