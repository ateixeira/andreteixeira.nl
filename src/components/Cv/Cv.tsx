import * as React from "react";
import { Header } from "../Header";
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
            I’m a Senior JavaScript developer with 8+ years of experience in web
            development. I’ve been working on projects of different sizes, using
            diverse languages and platforms. <br /> <br /> I’m skilled in
            building responsive and cross-browser design, implementing
            interactive interfaces, designing application architecture and
            developing SPAs (Single Page Applications), as well as MPAs. <br />{" "}
            <br /> Lately (in the past 4+ years) I have been focusing mostly on
            coding JavaScript. (React, React Native, Express). Most of the time
            I use Es6/7/next and TypeScript.
          </Section>
          <Section icon="address-card" title="contact">
            <SmallSectionContent element="phone" value="+31 0620316232" />
            <SmallSectionContent element="envelope" value="andre.teixeira@gmail.com" />
            <SmallSectionContent element="map-marker-alt" value="Utrecht, NL" />
          </Section>
          <Section icon="user-plus" title="social">
            <SmallSectionContent element={faGithubAlt} value="github.com/ateixeira" />
            <SmallSectionContent element={faLinkedin} value="linkedin.com/in/andret/" />
            <SmallSectionContent element={faStackOverflow} value="stackoverflow.com/users/955183" />
          </Section>
        </div>
        <div className="right-column">
          <Section icon="code-branch" title="experiences">
            <LargeSectionContent 
              place="LINKIT"
              title="JavaScript Developer"
              period={[new Date(('2019-06-11')), new Date(('2019-06-11'))]}
              tags={["JavaScript", "NodeJS", "ReactJS"]}
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              icon="plus" 
            />
            <LargeSectionContent 
              place="ABB"
              title="JavaScript Developer"
              period={[new Date(('2019-06-11')), new Date(('2019-06-11'))]}
              tags={["JavaScript", "NodeJS", "ReactJS"]}
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              icon="plus" 
            />
            <LargeSectionContent 
              place="BookSpot"
              title="JavaScript Developer"
              period={[new Date(('2019-06-11')), new Date(('2019-06-11'))]}
              tags={["JavaScript", "NodeJS", "ReactJS"]}
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
              icon="plus" 
            />
          </Section>
          <Section icon="hammer" title="skills">
            skills content
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
