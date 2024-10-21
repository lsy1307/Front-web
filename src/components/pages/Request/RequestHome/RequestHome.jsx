import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';
import TopContainer from '../../Home/Main/ContainerComponent/TopContainer/TopContainer';
import RequestCard from '../Card/RequestCard';
const RequestHomeComponent = () => {
  const navigate = useNavigate();
  const registRequest = () => {
    navigate('/project/regist');
  };
  return (
    <Container>
      <TopContainer
        isRequest={true}
        onClickHandler={registRequest}
        text={'All Requests'}
        count={'734,674'}
        isNotHome={true}
      />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
      <RequestCard />
    </Container>
  );
};

export default RequestHomeComponent;
