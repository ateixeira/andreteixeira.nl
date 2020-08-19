import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Sections.scss";

interface IProps {
  title: string;
  icon: IconProp;
  children?: React.ReactNode;
}
const Section: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <div className="section-title">{props.title}</div>
      </div>
      <div className="section-body">{props.children}</div>
    </div>
  );
};

export default Section;
