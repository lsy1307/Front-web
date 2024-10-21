import React from 'react';
import {
  Container,
  TopContainer,
  InfoLabelContainer,
  LabelContainer,
  LikeIcon,
  Title,
  BottomContainer,
} from './style';
import InfoLabel from './InfoLabel/InfoLabel';
import Label from '../../../common/Label/Label';
const RequestCard = () => {
  return (
    <Container>
      <TopContainer>
        <InfoLabelContainer>
          <InfoLabel text={'개발자'} />
          <InfoLabel text={'3개월'} />
          <InfoLabel text={'상주'} />
          <InfoLabel text={'상암/디지털미디어시티역'} />
        </InfoLabelContainer>
        <LikeIcon src="src/assets/svgs/like_icon.svg" />
      </TopContainer>
      <Title>
        {
          '[상주][중급/C#(winform)/약3개월/디지털미디어시티역/2명]기업 내부 시스템'
        }
      </Title>
      <BottomContainer>
        <LabelContainer>
          <Label text={'중급'} />
          <Label text={'C#'} />
        </LabelContainer>
        <Label text={'마감 8일전'} />
      </BottomContainer>
    </Container>
  );
};

export default RequestCard;
