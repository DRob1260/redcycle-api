import React from 'react';
import { generateDescriptionPreview } from './PostCardUtils';
import './PostCard.scss';
import { deleteCommunityPost } from '../../../../services/RedcycleApi';

const PostCard = ({ post, refreshPosts }) => {
  return (
    <div className={'PostCard'}>
      <div className={'card'}>
        <div className={'card-body'}>
          <h5 className={'card-title'}>{post.title}</h5>
          <p className={'card-text'}>
            {generateDescriptionPreview(post.description)}
         </p>
            <button onClick={() => {
               deleteCommunityPost(post.id)
               refreshPosts()
            }}>Delete Post</button>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
