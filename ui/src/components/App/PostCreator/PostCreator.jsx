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


// const handlePost = (event) => {
//   // const uID = urlQueryParams.get('id');
//   // Title = event.target.Title.value;
//   // Description = event.target.Description.value;
//   // Category = event.target.Category.value;
//   // mockCommunityPost = {
//   //       "title": Title,
//   //       "description": Description,
//   //       "creationDate": today,
//   //       "available": true,
//   //       "category": Category,
//   //       "authorId": uID,
//   //       "locationId": "9a20f75f-c751-467f-8a1a-3614243c4248"
//   //     }
//   postCommunityPost(mockCommunityPost);
// };



export const PostCreator = () => {
  const urlQueryParams = useQuery();
  const username = urlQueryParams.get('username');
  const uID = urlQueryParams.get('id');
  // Title = event.target.Title.value;
  // Description = event.target.Description.value;
  // Category = event.target.Category.value;
  return (
    <div className={'PostCreator'}>
      <form onSubmit ={() => {postCommunityPost(mockCommunityPost)}}>
        <input type="text" name="Title" placeholder="Title" />
        <input type="text" name="Description" placeholder="Description" />
        <input type="text" name="Category" placeholder="Category"/>
        <button type="submit">Post</button>
    </form>
    </div>
  );
};
