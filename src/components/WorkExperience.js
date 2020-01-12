import React from 'react';

const WorkExperience = () => {
  return (
    <>
      <div className="content-card">
        <div className="card-header">
          <div className="company-logo company-expedia">Exp</div>
          <h2>
            <span className="company-name">Tourism Media / Expedia</span>
            <span className="company-period">(August 2019 - Current)</span>
            <span className="company-title">Softare Engineer</span>
          </h2>
        </div>

        <div className="card-main elevation">
          <p>
            I am currently working full time in Expedia's Brisbane office under Tourism Media's
            employment, funded by the SEO team. I joined the DX team where we are tasked to build
            a suite of Destination Discovery travel guide pages that are rich in content and highly
            optimized for SEO purposes. Example URL:
            <a
              className="common-link"
              href="https://expedia.com/Brisbane.dx179993"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://expedia.com/Brisbane.dx179993
            </a>
          </p>

          <p>Highlights</p>

          <ul className="job-highlights">
            <li>
              Worked extensively in Blossom, which is the repository where the Destination
              Discovery project currently resides. Blossom is based off Expedia's in-house
              modern front-end framework, Bernie, which was built with React and Typescript.
              It also heavily utilized Flex micro-services architecture as its backing
              services.
            </li>
            <li>
              Achieved core approver status in Blossom within 3 months of working in Expedia.
            </li>
            <li>
              Represented the DX team and presented the DX project to Brisbane team during the
              Tech Catalyst event that was held on 26th September 2019.
            </li>
            <li>
              Rotated to Small Crafts team (previously known as Money Maker Squad) to work on
              several GP maximizing features for 6 weeks.
            </li>
            <li>
              Actively involved and attended community sync governances such as APAC UI sync and
              Blossom governance that was held fortnightly.
            </li>
            <li>
              Contributed to UITK components library which is a set of custom React components
              built to be shared to use in company-wide projects under the Unified Design System (UDS).
            </li>
          </ul>
        </div>
      </div>

      <div className="content-card">
        <div className="card-header">
          <div className="company-logo company-tanda">Ta</div>
          <h2>
            <span className="company-name">Tanda</span>
            <span className="company-period">(April 2019 - August 2019)</span>
            <span className="company-title">Softare Engineer</span>
          </h2>
        </div>

        <div className="card-main elevation">
          <p>
            Tanda has the vision to build the greatest product ever. Working at Tanda has extended
            my skills as software developer to solutions architecture, mobile development and
            cloud infrastructure.
          </p>

          <p>Highlights</p>

          <ul className="job-highlights">
            <li>
              Worked closely with developers and support teams in maintaining and adding new features
              to the main web SaaS product (Tanda), which is predominantly built in Ruby on Rails,
              with several React components mounted on views and managed by Webpack pipeline.
            </li>
            <li>
              Liaised with front-line teams such as sales, customer support and product manager in
              client meetings and demos, to gain better understanding regarding customer expectations,
              feature priorities and product roadmap.
            </li>
            <li>Undertook mobile development work as required, utilizing mainly React Native.</li>
            <li>
              Worked on development operations including application orchestration utilizing Circle
              CI, deployment and scaling utilizing various AWS services such as Lambdas,
              CloudFormation and Auto Scaling Group, managing multi-staging branches and common
              database, and monitoring production metrics using tools such as Grafana and Airbrake.
            </li>
            <li>
              Maintained APIs that are consumed by both external parties and internal applications
              such as mobile and time clock app.
            </li>
          </ul>
        </div>
      </div>

      <div className="content-card">
        <div className="card-header">
          <div className="company-logo company-netengine">NG</div>
          <h2>
            <span className="company-name">NetEngine</span>
            <span className="company-period">(June 2018 - April 2019)</span>
            <span className="company-title">Softare Developer</span>
          </h2>
        </div>

        <div className="card-main elevation">
          <p>
            At NetEngine we bring your digital vision to life. With clients ranging from start-ups
            to major corporations, we pride ourselves on our expertise in developing well
            thought web-based and mobile applications. Mainly a backend developer, I have also
            involved in numerous frontend work and deployment infrastructure, plus myriad of project
            ecosystem processes including project planning, work flows, design, client collaboration
            and testing. During my time at NetEngine, I have vastly extended my knowledge and
            experience not only in programming, but also in some key project management skills.
          </p>

          <p>Highlights</p>

          <ul className="job-highlights">
            <li>
              Net Engine's MVP (Most Valuable Personal) for second quarter of 2018/2019 (October,
              November and December).
            </li>
            <li>
              Heavily involved in building and maintaining 5 web application projects, with clients
              ranging from innovative start-ups to well-known business agencies.
            </li>
            <li>
              Lead solution architect and developer for one of the company's main clients.
              Coordinated and delivered features worth of 4 sprints of development work (~$10,000
              per sprint) since taking over as lead developer for the client's application
              (in mid-November 2018).
            </li>
            <li>
              Undertook predominantly back end work - from designing application architecture to
              constructing RESTful or GraphQL APIs for front end to consume, mainly utilizing Node/Express.
            </li>
            <li>
              Managed front end work when required, utilizing mostly React and Angular for
              producing Single Page Application (SPA).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
