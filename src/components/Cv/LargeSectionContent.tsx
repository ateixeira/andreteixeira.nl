import * as React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./Sections.scss";

interface IProps {
  place: string;
  title: string;
  period: [Date, Date?];
  tags: string[];
  value: string;
  icon: IconProp;
}

const LargeSectionContent: React.FC<IProps> = (props) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Ma",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const { period } = props;
  const formattedDate = (date: Date) =>
    `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  const dateOrNow = (date: Date) => (date ? formattedDate(date) : "Now");
  return (
    <div className="large-section-item">
      <div className="large-section-item-icon">
        {/* <FontAwesomeIcon icon={props.icon} /> */}+
      </div>
      <div className="large-section-item-content">
        <div className="large-section-item-wrapper">
          <div className="large-section-item-company">{props.place}</div>
          <div className="large-section-item-period">
            {`${formattedDate(period[0])} - ${dateOrNow(period[1])}`}
          </div>
        </div>
        <div className="large-section-item-title">{props.title}</div>
        <div
          className="large-section-item-value"
          dangerouslySetInnerHTML={{ __html: props.value }}
        ></div>
        <div className="large-section-item-tags">
          {`#${props.tags.join(" #")}`}
        </div>
      </div>
    </div>
  );
};

export default LargeSectionContent;
