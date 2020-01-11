import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Icons from './components/Icons';
import Photo from './components/Photo';
import NameAndTitle from './components/NameAndTitle';
import Intro from './components/Intro';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Social from './components/Social';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="icons-bar-container">
          <Icons />
        </div>

        <div className="profile-container">
          <div className="profile-left-section-container">
            <Photo />
            <NameAndTitle />
          </div>

          <div className="profile-right-section-container">
            <Intro />
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="navbar-container">
          <Link to="/">Work Experience</Link>
          <span className="vertical-separator">|</span>
          <Link to="/education">Education</Link>
          <span className="vertical-separator">|</span>
          <Link to="/projects">Projects</Link>
          <span className="vertical-separator">|</span>
          <Link to="/social">Social</Link>
        </div>

        <div>
          <Switch>
            <Route exact path="/" component={WorkExperience} />
            <Route path="/education" component={Education} />
            <Route path="/projects" component={Projects} />
            <Route path="/social" component={Social} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
