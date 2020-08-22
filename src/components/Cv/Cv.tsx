import * as React from "react";
import Header from "./Header";
import Section from "./Section";
import SkillsSectionContent from "./SkillsSectionContent";
import EducationSectionContent from "./EducationSectionContent";
import SmallSectionContent from "./SmallSectionContent";
import LargeSectionContent from "./LargeSectionContent";
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
            <LargeSectionContent
              company="LINKIT"
              title="Software Developer and Consultant"
              place="Utrecht - Netherlands"
              period={[new Date("2018-01-01")]}
              tags={["TypeScript", "NodeJS", "ReactJS", "AWS"]}
              value="LINKIT is a knowledge-driven IT-organisation specialized in delivering IT-sourcing solutions at multinationals and governmental organisations in a dynamic environment."
              icon="plus"
            />
            <LargeSectionContent
              company="Jumbo Supermarkten"
              title="JavaScript Developer - Backend (via LINKIT)"
              place="Veghel - Netherlands"
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
            <LargeSectionContent
              company="ABB"
              title="JavaScript Developer - Fullstack (via LINKIT)"
              place="Eindhoven - Netherlands"
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
            <LargeSectionContent
              company="BookSpot"
              title="JavaScript Developer - Frontend (via LINKIT)"
              place="'s-Graveland - Netherlands"
              period={[new Date("2018-04-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Worked on the set-up and upgrade of the frontend of the transition ECI/BookSpot.<br/>The project consisted of a loosely coupled ReactJS application to an INTERSHOP backend, using a modern and up to date stack."
              icon="plus"
            />
            <LargeSectionContent
              company="Urbanizo"
              title="Co-Founder and CTO"
              place="'Brasília, DF - Brazil"
              period={[new Date("2012-09-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Urbanizo was a startup focused on bringing data intelligence to real estate market. It was invested by Buscapé in 2011 and acquired by Navent/ImovelWeb in 2015."
              icon="plus"
            />
          </Section>
          <Section icon="hammer" title="skills">
            <div className="skills-section-wrapper">
              <SkillsSectionContent skill="TypeScript" score={5} />
              <SkillsSectionContent skill="NodeJS" score={5} />
              <SkillsSectionContent skill="ReactJS" score={5} />
              <SkillsSectionContent skill="MongoDB" score={5} />
              <SkillsSectionContent skill="GraphQL" score={5} />
              <SkillsSectionContent skill="ElasticSearch" score={5} />
              <SkillsSectionContent skill="Apache" score={5} />
              <SkillsSectionContent skill="Python" score={5} />
            </div>
          </Section>
          <Section icon="landmark" title="education and awards">
            <div className="education-section-wrapper">
              <EducationSectionContent
                icon="graduation-cap"
                title="Bachelor of Computer Science"
                description="at UniCEUB, Brasília, DF, Brazil"
                date="2002 - 2007"
              />
              <EducationSectionContent
                icon="trophy"
                title="1st company at <i><b><a href='https://thenextweb.com/la/2011/08/01/your-idea-is-worth-1-million-and-the-winners-are/' target='_blank' rel='noopener noreferrer'>Sua Idéia Vale 1 Milhão</a></b></i>"
                description="The winning idea gave birth to <b>Urbanizo</b> "
                date="2012"
              />
              <EducationSectionContent
                icon={faAws}
                title="AWS Certified Solutions Architect"
                date="2018"
              />
              <EducationSectionContent
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
