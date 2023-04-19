import React from 'react';
import '.post.css';

const post = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnailUrl} alt={post.title} />
      <p>{post.description}</p>
    </div>
  );
};



 post = ({ post, index }) => {
  return (
    <div className="post">
      <span className="post-index">{index + 1}</span>
      <h2 className="post-title">{post.title}</h2>
      <img src={post.thumbnailUrl} alt={post.title} className="post-image" />
      <p className="post-description">{post.description}</p>
    </div>
  );
};




export default post;

