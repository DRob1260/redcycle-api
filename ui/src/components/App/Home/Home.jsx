import React, { useEffect, useState } from 'react';
import { getCommunityPosts } from '../../../services/RedcycleApi';
import { PostCard } from './PostCard/PostCard';
import './Home.scss';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getCommunityPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className={'Home'} data-testid={'Home'}>
      <div className={'card-columns'}>
        {posts.map((post, index) => (
          <React.Fragment key={`post-${index}`}>
            <PostCard post={post} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { Home };
