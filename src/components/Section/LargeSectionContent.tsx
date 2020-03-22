import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./style.scss";


interface IProps {
  place: string;
  title: string;
  period: [Date, Date];
  tags: string[];
  value: string;
  icon: IconProp;
}
const LargeSectionContent: React.FC<IProps> = props => {
  return (
    <div className="large-section-item">
      <div className="large-section-item-icon">
        {/* <FontAwesomeIcon icon={props.icon} /> */}
        +
      </div>
      <div className="large-section-item-content">
        <div className="large-section-item-wrapper">
          <div className="large-section-item-place">
            {props.place}
          </div>
          <div className="large-section-item-period">
            {`${props.period[0].getFullYear()} - ${props.period[1].getFullYear()}`}
          </div>
        </div>
        <div className="large-section-item-title">
          {props.title}
        </div>
        <div className="large-section-item-value">
          {props.value}
        </div>
        <div className="large-section-item-tags">
          {`#${props.tags.join(" #")}`}
        </div>
      </div>
    </div>
  );
};

export default LargeSectionContent;
