import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Sections.scss";

interface IProps {
  element: IconProp;
  value: string;
}
const SmallSectionContent: React.FC<IProps> = (props) => {
  return (
    <div className="small-section-item">
      <div className="small-section-item-icon">
        <FontAwesomeIcon icon={props.element} />
      </div>
      <div className="small-section-item-content">{props.value}</div>
    </div>
  );
};

export default SmallSectionContent;
