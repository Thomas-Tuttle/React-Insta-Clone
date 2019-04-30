import React from 'react';
import Post from './Post';
import './Posts.css';

const PostsContainer = props => {
  return (
    <div className="postsContainer">
      {props.posts.map(user => <Post key={user.imageUrl} post={user} />)}
    </div>
  );
};

export default PostsContainer;