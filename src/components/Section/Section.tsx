import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

interface IProps {
  title: string,
  children?: React.ReactNode,
}
const Section: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon">
          <FontAwesomeIcon icon="angle-right" />
        </div>
        <div className="section-title">{props.title}</div>
      </div>
      <div className="section-body">{props.children}</div>
    </div>
  );
};

export default Section;
