import React from 'react';
import PostCard from './PostCard';
import Header from '../shared/Header';

import containerStyles from '../../styles/containerStyles.js';

export default function Posts({ posts, removePost, editPost, userName }) {
  return posts.length ? (
    <>
      <Header text={`Posts of ${userName}`} />
      <div style={containerStyles}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            postData={post}
            removePost={removePost}
            editPost={editPost}
          />
        ))}
      </div>
    </>
  ) : (
    <Header text={'No Posts'} />
  );
}
