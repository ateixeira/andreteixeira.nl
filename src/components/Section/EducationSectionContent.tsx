import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

interface IProps {
  title: string;
  icon: IconProp;
  date: string;
  description?: string;
}

const EducationSectionContent: React.FC<IProps> = (props) => {
  return (
    <div className="education-section-item">
      <div className="education-section-item-icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div>
        <div className="education-section-item-date">{props.date}</div>
        <div
          className="education-section-item-title"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <div
          className="education-section-item-description"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
    </div>
  );
};

export default EducationSectionContent;
