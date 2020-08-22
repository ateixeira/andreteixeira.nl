import * as React from "react";
import "./Sections.scss";

interface IProps {
  skill: string;
  score: number;
}

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

const SkillsSectionContent: React.FC<IProps> = (props) => {
  return (
    <div className="skills-section-item">
      <div className="skills-section-item-content">{props.skill}</div>
      {renderScoreBar(props.score)}
    </div>
  );
};

export default SkillsSectionContent;
