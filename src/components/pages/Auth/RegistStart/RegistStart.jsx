import React, { useState, useEffect } from 'react';
import {
  Container,
  Title,
  SemiTitle,
  BottomContainer,
  SelectBox,
  RegisterInfoContainer,
  RegisterInfo,
  RegisterInfoTitle,
  TitleContainer,
  ButtonContainer,
  SelectButton,
} from './style';
import Button from '../../../common/Button/Button';
import useStore from '../../../../zustand/Store';
import StarLabel from '../../../common/StarLabel/StarLabel';

const RegistStart = () => {
  const { registInfo, setRegistInfo, registPage, setRegistPage } = useStore();
  const handleClientClick = () => {
    setRegistInfo('client');
  };
  const handlePartnersClick = () => {
    setRegistInfo('partners');
  };
  const handleNextPage = () => {
    setRegistPage(1);
  };
  useEffect(() => {
    console.log(registPage);
  }, [registPage]);
  return (
    <Container>
      <TitleContainer>
        <Title>DevLink</Title>
        <SemiTitle>가입하기</SemiTitle>
      </TitleContainer>
      <BottomContainer>
        <StarLabel text={'이용목적'} />
        <SelectBox onClick={handleClientClick}>
          <SelectButton info={registInfo === 'client'} />
          <img src="src/assets/svgs/client_icon.svg" />
          <RegisterInfoContainer>
            <RegisterInfoTitle>클라이언트</RegisterInfoTitle>
            <RegisterInfo>
              전문가를 찾아 프로젝트를 의뢰하고 싶어요.
            </RegisterInfo>
          </RegisterInfoContainer>
        </SelectBox>
        <SelectBox onClick={handlePartnersClick}>
          <SelectButton info={registInfo === 'partners'} />
          <img src="src/assets/svgs/partners_icon.svg" />
          <RegisterInfoContainer>
            <RegisterInfoTitle>파트너스</RegisterInfoTitle>
            <RegisterInfo>
              커뮤니티 활동을 하며 프로젝트에 지원하고 싶어요.
            </RegisterInfo>
          </RegisterInfoContainer>
        </SelectBox>
        <ButtonContainer>
          <Button
            bgcolor={registInfo === '' && '#CECECE'}
            bordercolor={registInfo === '' && 'transparent'}
            text={'다음'}
            onClickHandler={registInfo !== '' ? handleNextPage : undefined}
          />
        </ButtonContainer>
      </BottomContainer>
    </Container>
  );
};

export default RegistStart;
