import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import TopContainer from '../../Home/Main/ContainerComponent/TopContainer/TopContainer';
import QnaCard from '../Card/QnaCard';
const QnaHomeComponent = () => {
  const navigate = useNavigate();
  const registQuestion = () => {
    navigate('/qna/regist');
  };
  return (
    <Container>
      <TopContainer
        isRequest={false}
        onClickHandler={registQuestion}
        text={'All Questions'}
        count={'2,734,674'}
        isNotHome={true}
      />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
      <QnaCard />
    </Container>
  );
};

export default QnaHomeComponent;
