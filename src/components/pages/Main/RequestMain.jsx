import React from 'react';
import RequestCard from '../Request/Card/RequestCard';
import { Container } from './style';
import TopContainer from '../Home/Main/ContainerComponent/TopContainer/TopContainer';
import { useNavigate } from 'react-router-dom';

const RequestMain = () => {
  const navigate = useNavigate();
  const registRequest = () => {
    navigate('/project/regist');
  };
  const showMore = () => {
    navigate('/project');
  };
  return (
    <Container>
      <TopContainer
        isRequest={true}
        onClickHandler={registRequest}
        text={'Requests'}
        count={'734,674'}
        showMore={showMore}
      />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </Container>
  );
};

export default RequestMain;
