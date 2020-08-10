import * as React from "react";
import "./style.scss";

interface IProps {
  skill: string;
  score: number;
}

const renderScoreBar = (score: number): React.ReactNode => {
  return (
    <div className="skills-section-bar">
      {Array(score)
        .fill(undefined)
        .map(() => (
          <div className="skills-section-bar-slot" />
        ))}
    </div>
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
