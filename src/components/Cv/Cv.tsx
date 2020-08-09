import * as React from "react";
import { Header } from "../Header";
import { SkillsSectionContent } from "../Section";
import { Section, SmallSectionContent, LargeSectionContent } from "../Section";
import {
  faGithubAlt,
  faLinkedin,
  faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import "./style.scss";

const Cv: React.FC<{}> = (props) => {
  return (
    <div className="paper-sheet">
      <Header />
      <div className="content">
        <div className="left-column">
          <Section icon="user" title="about-me">
            I’m a Software Developer with 9+ years of experience. I’ve been
            working on projects of different sizes, using diverse languages and
            platforms.
            <p />
            In the past 5 years I have been focusing mainly on JavaScript
            coding, using mostly ES6+/next and TypeScript.
            <p />
            In the last 2 years, I have put more focus on backend and cloud
            technologies, my daily tasks involves the maintenance of NodeJS
            microservices, development of GraphQL apis and automated pipelines.
            My principal tools are: #NodeJS, #GraphQL, #GithubActions,
            #Terraform, #Docker
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
              value="github.com/ateixeira"
            />
            <SmallSectionContent
              element={faLinkedin}
              value="linkedin.com/in/andret/"
            />
            <SmallSectionContent
              element={faStackOverflow}
              value="stackoverflow.com/users/955183"
            />
          </Section>
        </div>
        <div className="right-column">
          <Section icon="code-branch" title="experiences">
            <LargeSectionContent
              place="LINKIT"
              title="JavaScript Developer"
              period={[new Date("2018-01-01")]}
              tags={["TypeScript", "NodeJS", "ReactJS"]}
              value="LINKIT is a knowledge-driven IT-organisation specialized in delivering IT-sourcing solutions at multinationals and governmental organisations in a dynamic environment."
              icon="plus"
            />
            <LargeSectionContent
              place="Jumbo"
              title="JavaScript Developer"
              period={[new Date("2020-04-20")]}
              tags={[
                "TypeScript",
                "Jest",
                "Docker",
                "MongoDB",
                "GraphQLFederation",
              ]}
              value="Part of the Jumbo <b>Foodcoach</b> backend team.<br/> I work maintaining and developing microservices on top of NestJS."
              icon="plus"
            />
            <LargeSectionContent
              place="ABB"
              title="JavaScript Developer"
              period={[new Date("2019-11-01"), new Date("2020-04-20")]}
              tags={["TypeScript", "NodeJS", "Karma", "Mocha", "Chai", "React"]}
              value="ABB Spirit IT provides the global oil and gas industry with advanced flow computers and measurement and automation solutions.<br/>I work as a software engineer on the eXLent product, an online measurement platform."
              icon="plus"
            />
            <LargeSectionContent
              place="BookSpot"
              title="JavaScript Developer"
              period={[new Date("2018-04-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Working on the set-up and upgrade of the front-end of the transition ECI/BookSpot.<br/>The project consists of a loosely coupled ReactJS application to an Intershop backend, using a modern and up to date stack."
              icon="plus"
            />
          </Section>
          <Section icon="hammer" title="skills">
            <div className="skills-section-wrapper">
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
              <SkillsSectionContent skill="TypeScript" score={5}/>
            </div>
          </Section>
          <Section icon="graduation-cap" title="education">
            education content
          </Section>
          <Section icon="icons" title="interests">
            interests content
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Cv;
