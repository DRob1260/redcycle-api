import React from 'react';
import { generateDescriptionPreview } from './PostCardUtils';
import './PostCard.scss';

const PostCard = ({ post }) => {
  return (
    <div className={'PostCard'}>
      <div className={'card'}>
        <div className={'card-body'}>
          <h5 className={'card-title'}>{post.title}</h5>
          <p className={'card-text'}>
            {generateDescriptionPreview(post.description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export { PostCard };
