import React from 'react';
import './PostCreator.scss';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const PostCreator = () => {
  const urlQueryParams = useQuery();
  const username = urlQueryParams.get('username');

  return (
    <div className={'PostCreator'}>
      {username ? (
        <div>
          <h1 className={'PostCreator'}>Welcome, {username}!</h1>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
        </div>
      )}
    </div>
  );
};
