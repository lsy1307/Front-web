import React from 'react';
import {
  Container,
  QuestionTitle,
  QuestionContent,
  LabelContainer,
  TimeStamp,
  BottomContainer,
} from './style';
import Label from '../../../common/Label/Label';

const QnaCard = () => {
  return (
    <Container>
      <QuestionTitle>대충 제목같은 제목입니다. 이유는 없습니다.</QuestionTitle>
      <QuestionContent>
        대충 내용같은 내용입니다. 이유는 없습니다.
      </QuestionContent>
      <BottomContainer>
        <LabelContainer>
          <Label text={'memory'} />
          <Label text={'memory-management'} />
          <Label text={'virtual-memory'} />
        </LabelContainer>
        <TimeStamp>asked 15 mins ago</TimeStamp>
      </BottomContainer>
    </Container>
  );
};

export default QnaCard;
