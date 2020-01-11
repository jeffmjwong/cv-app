import React from 'react';

import Icons from './components/Icons';
import Photo from './components/Photo';
import NameAndTitle from './components/NameAndTitle';
import Intro from './components/Intro';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="icons-bar-container">
        <Icons />
      </div>

      <div className="header-container">
        <div className="header-left-part-container">
          <Photo />
          <NameAndTitle />
        </div>

        <div className="header-right-part-container">
          <Intro />
        </div>
      </div>

      <div className="border">
        Main part
      </div>
    </div>
  );
}

export default App;
