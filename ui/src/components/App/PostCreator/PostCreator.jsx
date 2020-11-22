import React from 'react';
import './PostCreator.scss';
import { useLocation } from 'react-router-dom';
import { postCommunityPost } from '../../../services/RedcycleApi';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const mockCommunityPost = {
  "title": "Potatoes",
  "description": "Yummy potatoes",
  "creationDate": "2020-11-21T21:01:00Z",
  "available": true,
  "category": "FOOD",
  "authorId": "cdd356fb-c24a-4166-b86b-7120c7466e5b",
  "locationId": "9a20f75f-c751-467f-8a1a-3614243c4248"
}

export const PostCreator = () => {
  const urlQueryParams = useQuery();
  const username = urlQueryParams.get('username');

  return (
    <div className={'PostCreator'}>
      <button onClick={() => {postCommunityPost(mockCommunityPost)}}>Post</button>
    </div>
  );
};
