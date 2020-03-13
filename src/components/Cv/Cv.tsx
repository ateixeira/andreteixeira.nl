import * as React from "react";
import { Header } from "../Header";
import { Section } from "../Section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

interface IProps {

}
const Cv: React.FC<IProps> = (IProps) => {
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
            <div className="phone">
              <div className="phone-icon">
                <FontAwesomeIcon icon="phone" />
              </div>
              <div className="phone-content">
                +31 0620316232
              </div>
            </div>
            <div className="email">
              <div className="email-icon">
                <FontAwesomeIcon icon="envelope" />
              </div>
              <div className="email-content">
                andre.teixeira@gmail.com
              </div>
            </div>
          </Section>
          <Section icon="user-plus" title="social">
            social content
          </Section>
        </div>
        <div className="right-column">
          <Section icon="code-branch" title="experiences">
            experiences content
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
