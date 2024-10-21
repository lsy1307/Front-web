import React from 'react';
import {
  Container,
  LeftContainer,
  RightContainer,
  MiddleContainer,
} from './style';
import MenuList from '../../MenuList/MenuList';

const MainComponent = ({ contents }) => {
  return (
    <Container>
      <LeftContainer>
        <MenuList />
      </LeftContainer>
      <MiddleContainer>{contents}</MiddleContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default MainComponent;
