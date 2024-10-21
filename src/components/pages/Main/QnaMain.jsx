import React from 'react';
import QnaCard from '../Qna/Card/QnaCard';
import { Container } from './style';
import TopContainer from '../Home/Main/ContainerComponent/TopContainer/TopContainer';
import { useNavigate } from 'react-router-dom';
// isRequest onClickHandler count
const QnaMain = () => {
  const navigate = useNavigate();
  const registQuestion = () => {
    navigate('/qna/regist');
  };
  const showMore = () => {
    navigate('/qna');
  };
  return (
    <Container>
      <TopContainer
        isRequest={false}
        onClickHandler={registQuestion}
        text={'Questions'}
        count={'2,734,674'}
        showMore={showMore}
      />
      <QnaCard />
      <QnaCard />
      <QnaCard />
    </Container>
  );
};

export default QnaMain;
