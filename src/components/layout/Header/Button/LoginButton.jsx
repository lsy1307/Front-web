import React from 'react';
import { ButtonContainer } from './style';
import Button from '../../../common/Button/Button';
import { useNavigate } from 'react-router-dom';

const LoginButton = (props) => {
  //   const navigate = useNavigate();
  const handleLoginButtonClick = () => {
    // navigate('/login');
  };
  const handleSignupButtonClick = () => {
    // navigate('/signup');
  };
  return (
    <ButtonContainer>
      <Button
        bgcolor="#fff"
        fontcolor="#1B75D0"
        bordercolor="#1B75D0"
        onClickHandler={handleLoginButtonClick}
        text="login"
      />
      <Button onClickHandler={handleSignupButtonClick} text="signup" />
    </ButtonContainer>
  );
};

export default LoginButton;
