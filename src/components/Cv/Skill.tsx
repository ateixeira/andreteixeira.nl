import * as React from "react";
import { SkillItem } from "./types";
import "./Sections.scss";

const renderScoreBar = (score: number): React.ReactNode => {
  const drawDot = (_: number, index: number) => (
    <div
      key={index}
      className={`skills-section-dot ${score >= index + 1 ? "active" : ""}`}
    />
  );
  return (
    <div className="skills-section-dots">{Array(5).fill(" ").map(drawDot)}</div>
  );
};

const Skill: React.FC<SkillItem> = (props) => {
  return (
    <div className="skills-section-item">
      <div className="skills-section-item-content">{props.skill}</div>
      {renderScoreBar(props.score)}
    </div>
  );
};

export default Skill;
