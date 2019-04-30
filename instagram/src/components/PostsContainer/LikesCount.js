import React from 'react';

const LikesCount = props => {
  return [
    
    <div
      className="like-section"
      onClick={props.incrementLike}
    >
      <div className="likeBtn">
        <i className="far fa-heart" />
        <i className="far fa-comment" />
      </div>
      
    </div>,
    <div className="likeSection">
      <div className="likeCount">{props.likes} likes</div>
    </div>
    
  ];
};

export default LikesCount;