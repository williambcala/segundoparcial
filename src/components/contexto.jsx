import React, { createContext, useState } from 'react';
import posts from './posts';

export const contexto = createContext();

function postProvider({ children }) {
  const [postList, setPostList] = useState(posts);
  
  const addPost = (title, content) => {
    const newPost = { id: postList.length + 1, title, content };
    setPostList([...postList, newPost]);
  };
  
  return (
    <PostContext.Provider value={{ postList, addPost }}>
      {children}
    </PostContext.Provider>
  );
}

export default postProvider;
