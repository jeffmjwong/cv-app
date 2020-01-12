import React, { useState, useEffect } from 'react';

const Education = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => { setMounted(false) };
  }, [])

  return (
    <div className={mounted ? 'content-cards-container' : ''}>
      <div className="content-card elevation">
        <div className="card-header">
          <div className="company-logo company-coderacademy">CA</div>
          <h2>
            <span className="company-name">Coder Academy</span>
            <span className="company-period">(January 2018 - July 2018)</span>
            <span className="company-title">Diploma of Software Development</span>
          </h2>
        </div>

        <div className="card-main">
          <p>
            I made a decision to switch profession mid-career once I discovered my passion in
            programming and building software. I was initially self-taught, until I reached a point
            where I felt official education is needed. Coder Academy offered an intensive 6 months
            course on teaching web development where I attended class 9-5 from Monday to Friday.
            I landed my first Software Developer job in NetEngine, 1 month before I actually completed
            the course. I managed to finish the remaining course and obtain accreditation in the end
            by working full-time and studying part-time after landing my first job.
          </p>

          <p>Highlights</p>

          <ul className="job-highlights">
            <li>
              Learned and mastered basic building blocks of web development - HTML, CSS and
              JavaScript. Learned both desktop and mobile web design.
            </li>
            <li>
              Started with the Ruby programming language as a basis to learn fundamental programming
              principles such as Object Oriented Programming and MVC architecture.
            </li>
            <li>
              Exposed to usage of both relational database system and non-relational database system.
            </li>
            <li>
              Learned the Ruby on Rails framework and built an online e-commerce store as one of
              the major projects. Deployed live through Heroku -
              <a
                className="common-link"
                href="https://pure-savannah-46712.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pure-savannah-46712.herokuapp.com
              </a>
            </li>
            <li>
              Deep dived into JavaScript subjects and learned JS from basics to modern syntax -
              prototypal inheritance, functional JS, ES6, DOM and event listeners, promises and more.
            </li>
            <li>
              Focused on concepts such as client-server interaction and request-response cycle.
              Learned how to write simple servers from scratch using Node and Express. Learned about
              middlewares and routes handling. Learned how to build a Single Page Application using
              React. Learned how to connect a React application to an Express server.
            </li>
          </ul>
        </div>
      </div>

      <div className="content-card elevation">
        <div className="card-header">
          <div className="company-logo company-uq">UQ</div>
          <h2>
            <span className="company-name">University of Queensland</span>
            <span className="company-period">(2009 - 2012)</span>
            <span className="company-title">Bachelor of Engineering</span>
          </h2>
        </div>

        <div className="card-main">
          <p>
            I started out as a Civil Engineer after obtaining my Bachelor Degree in Engineering at
            the University of Queensland. I worked a few years in Sydney before going back to
            Brisbane to pursue a profession in Software Engineering.
          </p>

          <p>Highlights</p>

          <ul className="job-highlights">
            <li>Extended Major in Civil Engineering.</li>
            <li>Honours Class IIA.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
