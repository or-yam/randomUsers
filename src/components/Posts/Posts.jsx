import React from 'react';
import PostCard from './PostCard';
import Header from '../Accessorizes/Header';

import containerStyles from '../../Styles/containerStyles.js';

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
