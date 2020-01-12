import React, { useState, useEffect } from 'react';

const About = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => { setMounted(false) };
  }, [])

  return (
    <div className={mounted ? 'content-cards-container' : ''}>
      <div className="content-card elevation">
        <div className="card-main">
          <p>
            A little more about myself...
          </p>

          <p>
            I love everything about tech and is fascinated by the unlimited possibilities and values
            that software can bring to people and organizations. This is one of the reason why I
            decided to pursue a profession in programming although I have worked many years as a
            Civil Engineer.
          </p>

          <p>
            I enjoyed learning new programming languages and the next new shiny framework during
            my free time. Or you can find me building cool and fun games such as this one
            <a
              className="common-link"
              href="https://jeffmjwong.github.io/memory-game-by-jeff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://jeffmjwong.github.io/memory-game-by-jeff/
            </a>
          </p>

          <p>
            I also enjoyed attending various tech meetups and events, especially in Brisbane where
            the tech community is still gradually growing. One particular example is the Brisbane
            React meetup that has recently moved its usual meetup location to Expedia's office.
            I am also a regular in the monthly Ruby and JavaScript meetups that are held in various
            locations in Brisbane. I'm always keen to meet and have a chat with other developers in
            the Brisbane community to share our experiences and learn new things everyday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
