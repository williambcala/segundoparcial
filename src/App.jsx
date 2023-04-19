import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import lista_de_posts from './lista_de_posts';

const App = () => {
  return (
    <div>
      <h1>Lista de Posts</h1>
      <lista_de_posts />
    </div>
  );
};

export default App;
