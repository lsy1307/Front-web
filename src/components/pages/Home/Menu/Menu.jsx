import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Icon, MenuText } from './style';

const Menu = (props) => {
  return (
    <Container to={props.link}>
      <Icon src={props.icon} alt="이미지 로드 중" />
      <MenuText>{props.text}</MenuText>
    </Container>
  );
};

export default Menu;
