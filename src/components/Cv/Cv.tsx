import * as React from "react";
import { Header } from "../Header";
import { Section } from "../Section";
import "./style.scss";

interface IProps {

}
const Cv: React.FC<IProps> = (IProps) => {
  return (
    <div className="paper-sheet">
      <Header />
      <div className="content">
        <div className="left-column">
          <Section title="about-me">about-me content</Section>
          <Section title="contact">contact content</Section>
          <Section title="social">social content</Section>
        </div>
        <div className="right-column">
          <Section title="experiences">experiences content</Section>
          <Section title="skills">skills content</Section>
          <Section title="education">education content</Section>
          <Section title="interests">interests content</Section>
        </div>
      </div>
    </div>
  );
};

export default Cv;
