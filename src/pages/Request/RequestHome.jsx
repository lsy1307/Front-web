import React from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import RequestHomeComponent from '../../components/pages/Request/RequestHome/RequestHome';

const RequestHome = () => {
  return <MainComponent contents={<RequestHomeComponent />} />;
};

export default RequestHome;
