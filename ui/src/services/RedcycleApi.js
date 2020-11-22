import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

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
    axios.post('/redcycle/api/communityPosts/', communityPost).then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  });
};

export const getLocations = () => {
  return new Promise((resolve, reject) => {
    axios.get('/redcycle/api/locations/').then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  });
}

export const postLocation = (location) => {
  return new Promise((resolve, reject) => {
    axios.post('/redcycle/api/locations/', location).then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  });
}
