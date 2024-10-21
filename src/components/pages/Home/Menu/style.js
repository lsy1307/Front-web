import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  width: 100%;
  height: 2.0625rem;
  padding: 0.4375rem;
  align-items: flex-start;
  gap: 0.375rem;
  text-decoration: none;
  &:hover {
    background-color: #f1f2f3;
  }
  cursor: pointer;
`;

export const Icon = styled.img`
  height: 1.125rem;
`;
export const MenuText = styled.p`
  color: #0c0d0e;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 900;
  line-height: 1.0625rem;
`;
