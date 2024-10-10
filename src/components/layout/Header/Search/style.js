import React from 'react';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 70%;
  height: 2.0625rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0.1rem 0.5rem 0.1rem 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #babfc5;
  background: #fff;
  box-sizing: border-box;
`;

export const SearchBox = styled.input`
  margin-left: 0.3rem;
  width: 100%;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0;
  border: none;
  &::placeholder {
    color: #636b74;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;
