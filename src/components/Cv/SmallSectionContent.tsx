import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconLookup,
  IconDefinition,
  IconPrefix,
  IconName,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import "./Sections.scss";

interface IProps {
  icon: string;
  iconType: string;
  value: string;
}

const SmallSectionContent: React.FC<IProps> = (props) => {
  const iconLookup: IconLookup = { prefix: props.iconType as IconPrefix, iconName: props.icon as IconName }
  const iconDefinition: IconDefinition = findIconDefinition(iconLookup)
  return (
    <div className="small-section-item">
      <div className="small-section-item-icon">
        <FontAwesomeIcon icon={iconDefinition} />
      </div>
      <div
        className="small-section-item-content"
        dangerouslySetInnerHTML={{ __html: props.value }}
      />
    </div>
  );
};

export default SmallSectionContent;
