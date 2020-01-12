import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import Icons from './components/Icons';
import Photo from './components/Photo';
import NameAndTitle from './components/NameAndTitle';
import Intro from './components/Intro';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Projects';
import Social from './components/Social';

import './App.css';

const App = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App">
      <div className="header-container elevation">
        <div className="header">
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
      </div>

      <div className="main-container">
        <div className="navbar-container">
          <Link
            className={pathname === '/' ? 'active' : ''}
            to="/"
          >
            Work Experience
          </Link>

          <span className="vertical-separator">|</span>

          <Link
            className={pathname === '/education' ? 'active' : ''}
            to="/education"
          >
            Education
          </Link>

          <span className="vertical-separator">|</span>

          <Link
            className={pathname === '/projects' ? 'active' : ''}
            to="/projects"
          >
            Projects
          </Link>

          <span className="vertical-separator">|</span>

          <Link
            className={pathname === '/social' ? 'active' : ''}
            to="/social"
          >
            Social
          </Link>
        </div>

        <Switch>
          <Route exact path="/" component={WorkExperience} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={Projects} />
          <Route path="/social" component={Social} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
