import React, { useEffect } from 'react';
import { getToken } from '../api/oauth';
import { useNavigate } from 'react-router-dom';
const Callback = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getAccessToken = async () => {
      const res = await getToken();
      console.log(res);
    };
    getAccessToken();
    navigate('/home');
  }, []);
};

export default Callback;
