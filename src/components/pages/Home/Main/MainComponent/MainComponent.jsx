import React from 'react';
import {
  Container,
  LeftContainer,
  RightContainer,
  MiddleContainer,
} from './style';
import MenuList from '../../MenuList/MenuList';

const MainComponent = () => {
  return (
    <Container>
      <LeftContainer>
        <MenuList />
      </LeftContainer>
      <MiddleContainer></MiddleContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default MainComponent;
