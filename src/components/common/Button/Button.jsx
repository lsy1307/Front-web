import React from 'react';
import { CustomButton } from './style';
const Button = (props) => {
  return (
    <CustomButton
      bgcolor={props.bgcolor}
      fontcolor={props.fontcolor}
      bordercolor={props.bordercolor}
      onClick={props.onClickHandler}
    >
      {props.text}
    </CustomButton>
  );
};

export default Button;
