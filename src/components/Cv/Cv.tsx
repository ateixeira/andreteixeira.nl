import * as React from "react";
import { Header } from "../Header";
import { SkillsSectionContent, EducationSectionContent } from "../Section";
import { Section, SmallSectionContent, LargeSectionContent } from "../Section";
import {
  faGithubAlt,
  faLinkedin,
  faStackOverflow,
  faAws
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
              value="users/955183"
            />
          </Section>
        </div>
        <div className="right-column">
          <Section icon="code-branch" title="experiences">
            <LargeSectionContent
              place="LINKIT"
              title="Software Developer and Consultant"
              period={[new Date("2018-01-01")]}
              tags={["TypeScript", "NodeJS", "ReactJS", "AWS"]}
              value="LINKIT is a knowledge-driven IT-organisation specialized in delivering IT-sourcing solutions at multinationals and governmental organisations in a dynamic environment."
              icon="plus"
            />
            <LargeSectionContent
              place="Jumbo Supermarkten"
              title="JavaScript Developer - Backend (via LINKIT)"
              period={[new Date("2020-04-20")]}
              tags={[
                "TypeScript",
                "Jest",
                "Docker",
                "MongoDB",
                "GraphQLFederation",
                "AWS",
              ]}
              value="Part of the Jumbo <b>Foodcoach</b> backend team.<br/> I work maintaining and developing microservices on top of NestJS."
              icon="plus"
            />
            <LargeSectionContent
              place="ABB"
              title="JavaScript Developer - Fullstack (via LINKIT)"
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
              place="BookSpot"
              title="JavaScript Developer - Frontend (via LINKIT)"
              period={[new Date("2018-04-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Worked on the set-up and upgrade of the frontend of the transition ECI/BookSpot.<br/>The project consisted of a loosely coupled ReactJS application to an INTERSHOP backend, using a modern and up to date stack."
              icon="plus"
            />
            <LargeSectionContent
              place="Urbanizo"
              title="Co-Founder and CTO"
              period={[new Date("2018-04-01"), new Date("2019-10-01")]}
              tags={["React", "Webpack", "Babel", "SASS"]}
              value="Urbanizo was a startup focused on bringing data intelligence to real estate market. It was invested by Buscapé in 2011 and acquired by Navent/ImovelWeb in 2015."
              icon="plus"
            />
          </Section>
          <Section icon="hammer" title="skills">
            <div className="skills-section-wrapper">
              <SkillsSectionContent skill="TypeScript" score={5} />
              <SkillsSectionContent skill="NodeJS" score={4} />
              <SkillsSectionContent skill="ReactJS" score={2} />
              <SkillsSectionContent skill="MongoDB" score={5} />
              <SkillsSectionContent skill="GraphQL" score={5} />
              <SkillsSectionContent skill="ElasticSearch" score={5} />
              <SkillsSectionContent skill="Apache" score={5} />
              <SkillsSectionContent skill="Python" score={4} />
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
                title="1st place at <i><b><a href='htpps://www.google.com' target='_blank' rel='noopener noreferrer' style='color: inherit;text-decoration:none'>Sua Idéia Vale 1 Milhão</a></b></i>"
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
          {/* <Section icon="icons" title="interests">
            interests content
          </Section> */}
        </div>
      </div>
    </div>
  );
};

export default Cv;
