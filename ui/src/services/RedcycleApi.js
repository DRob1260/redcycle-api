import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"

export const getCommunityPosts = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/redcycle/api/communityPosts/')
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const getCommunityPostsFromUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios.get(`/redcycle/api/communityPosts?authorId=${userId}`).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export const postCommunityPost = (communityPost) => {
  return new Promise((resolve, reject) => {
    axios.post('/redcycle/api/communityPosts/', communityPost).then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  });
};

export const patchCommunityPost = (communityPost) => {
  return new Promise((resolve, reject) => {
    axios.patch(`/redcycle/api/communityPosts/${communityPost.id}/`, communityPost).then((updatedCommunityPost) => {
      resolve(updatedCommunityPost);
    }).catch((error) => {
      reject(error);
    });
  });
}

export const deleteCommunityPost = (communityPostId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`/redcycle/api/communityPosts/${communityPostId}/`).then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  })
}

export const getLocations = () => {
  return new Promise((resolve, reject) => {
    axios.get('/redcycle/api/locations/').then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  });
}

export const getLocationsFromUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios.get(`/redcycle/api/locations?authorId=${userId}`).then((response) => {
      resolve(response.data);
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

export const deleteLocation = (locationId) => {
  return new Promise((resolve, reject) => {
    axios.post(`/redcycle/api/locations/${locationId}/`).then(() => {
      resolve();
    }).catch((error) => {
      reject(error);
    });
  }
}

export const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios.get(`/redcycle/api/users/${userId}/`).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/redcycle/api/account/current/`).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  });
}
