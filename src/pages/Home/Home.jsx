import React from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import RequestMain from '../../components/pages/Main/RequestMain';
import QnaMain from '../../components/pages/Main/QnaMain';
const Home = () => {
  return (
    <MainComponent
      contents={
        <>
          <RequestMain />
          <QnaMain />
        </>
      }
    />
  );
};

export default Home;
