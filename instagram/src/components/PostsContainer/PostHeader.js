import React from 'react';
import './Posts.css';

const PostHeader = props => {
  return (
    <div className="userHeader">
      <div className="userIcon">
        <img className="iconImg" src={props.thumbnailUrl}/>
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;