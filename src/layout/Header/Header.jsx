import React, { useState } from 'react';
import { Container, Title } from './style';
import Search from '../../components/layout/Header/Search/Search';
import LoginButton from '../../components/layout/Header/Button/LoginButton';

const Header = () => {
  return (
    <Container>
      <Title>DevLink</Title>
      <Search />
      <LoginButton />
    </Container>
  );
};

export default Header;
