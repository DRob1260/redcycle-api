import axios from 'axios';

export const getCommunityPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/redcycle/api/communityPosts')
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const postCommunityPost = (communityPost) => {
  return new Promise((resolve, reject) => {
    axios.post('/redcycle/api/')
  });
}
