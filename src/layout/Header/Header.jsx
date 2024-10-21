import React, { useState } from 'react';
import { Container, Title, TitleButton } from './style';
import Search from '../../components/layout/Header/Search/Search';
import LoginButton from '../../components/layout/Header/Button/LoginButton';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleTitleButtonClick = () => {
    navigate('/home');
  };
  return (
    <Container>
      <TitleButton onClick={handleTitleButtonClick}>
        <Title>DevLink</Title>
      </TitleButton>
      <Search />
      <LoginButton />
    </Container>
  );
};

export default Header;
