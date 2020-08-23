import * as React from "react";
import {
  IconLookup,
  IconPrefix,
  IconName,
  IconDefinition,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sections.scss";

interface IProps {
  title: string;
  icon: string;
  iconType?: string;
  date: string;
  description?: string;
}

const Education: React.FC<IProps> = (props) => {
  const iconLookup: IconLookup = {
    prefix: props.iconType as IconPrefix,
    iconName: props.icon as IconName,
  };
  const iconDefinition: IconDefinition = findIconDefinition(iconLookup);
  return (
    <div className="education-section-item">
      <div className="education-section-item-icon">
        <FontAwesomeIcon icon={iconDefinition} />
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

export default Education;
