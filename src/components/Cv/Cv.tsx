import * as React from "react";
import Header from "./Header";
import Section from "./Section";
import Skill from "./Skill";
import Education from "./Education";
import SmallSectionContent from "./SmallSectionContent";
import Experience from "./Experience";
import {
  faGithubAlt,
  faLinkedin,
  faStackOverflow,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const Cv: React.FC<{}> = (props) => {
  return (
    <div className="paper-sheet">
      <Header />
      <div className="content">
        <div className="left-column">
          <Section icon="user" title="about-me">
            <div className="aboutme">
              I am a Software Developer with 9+ years of experience. I have been
              working on projects with different sizes, using diverse languages
              and platforms.
              <p />
              In the past 5 years I have been focusing mainly on JavaScript
              coding, using mostly ES6+/next and TypeScript.
              <p />
              In the last 2 years, I have put more focus on backend and cloud
              technologies, my daily tasks involves the maintenance of NodeJS
              microservices, GraphQL apis, automated pipelines and cloud
              development.
            </div>
          </Section>
          <Section icon="address-card" title="contact">
            <SmallSectionContent element="phone" value="+31 0620316232" />
            <SmallSectionContent
              element="envelope"
              value="andre.teixeira@gmail.com"
            />
            <SmallSectionContent element="map-marker-alt" value="Utrecht, NL" />
          </Section>
          <Section icon="user-plus" title="social">
            <SmallSectionContent
              element={faGithubAlt}
              value="<a href='https://github.com/ateixeira' target='_blank' rel='noopener noreferrer'>github.com/ateixeira</a>"
            />
            <SmallSectionContent
              element={faLinkedin}
              value="linkedin.com/in/andret/"
            />
            <SmallSectionContent
              element={faStackOverflow}
              value="users/955183"
            />
          </Section>
        </div>
        <div className="right-column">
          <Section icon="code-branch" title="experiences">
            <Experience
              title="Software Developer and Consultant"
              company="LINKIT"
              place="Utrecht - NL"
              contact="Thiago de Faria - CTO"
              // phone="+31 634 346 616"
              period={[new Date("2018-01-01")]}
              tags={["TypeScript", "NodeJS", "ReactJS", "AWS"]}
              value="LINKIT is a knowledge-driven IT-organisation specialized in delivering IT-sourcing solutions at multinationals and governmental organisations in a dynamic environment."
              icon="plus"
            />
            <Experience
              title="JavaScript Developer - Backend (via LINKIT)"
              company="Jumbo Supermarkten"
              place="Veghel - NL"
              contact="Sabina Baciu - Team Lead"
              phone="+31 634 346 616"
              period={[new Date("2020-04-20")]}
              tags={[
                "TypeScript",
                "Jest",
                "Docker",
                "MongoDB",
                "GraphQL",
                "AWS",
              ]}
              value="Part of the Jumbo <b>Foodcoach</b> backend team.<br/> I work maintaining and developing microservices on top of NestJS."
              icon="plus"
            />
            <Experience
              title="JavaScript Developer - Fullstack (via LINKIT)"
              company="ABB"
              place="Eindhoven - NL"
              contact="Bram Wijnen - Tech. Lead"
              phone="+31 625 189 431"
              period={[new Date("2019-11-01"), new Date("2020-04-20")]}
              tags={[
                "TypeScript",
                "NodeJS",
                "Karma",
                "Mocha",
                "Chai",
                "React",
                "Azure",
              ]}
              value="ABB Spirit IT provides the global oil and gas industry with advanced flow computers and measurement and automation solutions.<br/>I work as a software engineer on the eXLent product, an online measurement platform."
              icon="plus"
            />
            <Experience
              title="JavaScript Developer - Frontend (via LINKIT)"
              company="BookSpot"
              place="'s-Graveland - NL"
              contact="Wietse de Vries - Frontend Lead"
              phone="+31 617 771 339"
              period={[new Date("2018-04-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Worked on the set-up and upgrade of the frontend of the transition ECI/BookSpot.<br/>The project consisted of a loosely coupled ReactJS application to an INTERSHOP backend, using a modern and up to date stack."
              icon="plus"
            />
            <Experience
              title="Co-Founder and CTO"
              company="Urbanizo"
              place="Brasília - Brazil"
              contact="Marcos Roberto - Co-Founder"
              phone="+55 (61) 9 8158 5100"
              period={[new Date("2012-09-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Urbanizo was a startup focused on bringing data intelligence to real estate market. It was invested by Buscapé in 2011 and acquired by Navent/ImovelWeb in 2015."
              icon="plus"
            />
          </Section>
          <Section icon="hammer" title="skills">
            <div className="skills-section-wrapper">
              <Skill skill="TypeScript" score={5} />
              <Skill skill="NodeJS" score={5} />
              <Skill skill="ReactJS" score={5} />
              <Skill skill="MongoDB" score={5} />
              <Skill skill="GraphQL" score={5} />
              <Skill skill="ElasticSearch" score={5} />
              <Skill skill="Apache" score={5} />
              <Skill skill="Python" score={5} />
            </div>
          </Section>
          <Section icon="landmark" title="education and awards">
            <div className="education-section-wrapper">
              <Education
                icon="graduation-cap"
                title="Bachelor of Computer Science"
                description="at UniCEUB, Brasília, DF, Brazil"
                date="2002 - 2007"
              />
              <Education
                icon="trophy"
                title="1st company at <i><b><a href='https://thenextweb.com/la/2011/08/01/your-idea-is-worth-1-million-and-the-winners-are/' target='_blank' rel='noopener noreferrer'>Sua Idéia Vale 1 Milhão</a></b></i>"
                description="The winning idea gave birth to <b>Urbanizo</b> "
                date="2012"
              />
              <Education
                icon={faAws}
                title="AWS Certified Solutions Architect"
                date="2018"
              />
              <Education
                icon={faAws}
                title="AWS Certified Developer"
                date="2020"
              />
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Cv;
