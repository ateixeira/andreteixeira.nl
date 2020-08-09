import * as React from "react";
import "./style.scss";

interface IProps {
  skill: string;
  score: number;
}

const renderScoreBar = (score: number): React.ReactNode => {
  return (
    <div></div>
  )
};

const SkillsSectionContent: React.FC<IProps> = (props) => {
  return (
    <div className="skills-section-item">
      <div className="skills-section-item-content">{props.skill}</div>
      <div className="skills-section-item-content">
        {renderScoreBar(props.score)}
      </div>
    </div>
  );
};

export default SkillsSectionContent;
