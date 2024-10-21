import React from 'react';
import MainComponent from '../../components/pages/Home/Main/MainComponent/MainComponent';
import QnaHomeComponent from '../../components/pages/Qna/QnaHome/QnaHomeComponent';

const QnaHome = () => {
  return <MainComponent contents={<QnaHomeComponent />} />;
};

export default QnaHome;
