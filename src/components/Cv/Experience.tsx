import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExperienceItem } from "./types";
import {
  faHome,
  faMapMarker,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "./Sections.scss";

const Experience: React.FC<ExperienceItem> = (props) => {
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
  const datePeriod = [new Date(period[0])];
  if (period[1]) {
    datePeriod.push(new Date(period[1]));
  }
  const formattedDate = (date: Date) =>
    `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  const dateOrNow = (date: Date) => (date ? formattedDate(date) : "Now");
  return (
    <div className="large-section-item">
      <div className="large-section-item-icon">+</div>
      <div className="large-section-item-content">
        <div className="large-section-item-wrapper">
          <div
            className="large-section-item-company"
            dangerouslySetInnerHTML={{ __html: props.title }}
          />
          <div className="large-section-item-period">
            {`${formattedDate(datePeriod[0])} - ${dateOrNow(datePeriod[1])}`}
          </div>
        </div>
        <>
          {(props.company || props.place || props.contact || props.phone) && (
            <div className="large-section-item-details">
              <div className="large-section-item-details-group">
                <span className="large-section-item-details-company">
                  {props.company && <FontAwesomeIcon icon={faHome} />}
                  &nbsp;<b>{props.company}</b>&nbsp;&nbsp;
                </span>
                <span>
                  {props.place && <FontAwesomeIcon icon={faMapMarker} />}
                  &nbsp;{props.place}&nbsp;&nbsp;
                </span>
              </div>
              <div className="large-section-item-details-group">
                <span>
                  {props.contact && <FontAwesomeIcon icon={faUser} />}
                  &nbsp;{props.contact}&nbsp;&nbsp;
                </span>
                <span>
                  {props.phone && <FontAwesomeIcon icon={faPhone} />}
                  &nbsp;{props.phone}&nbsp;&nbsp;
                </span>
              </div>
            </div>
          )}
        </>
        <div
          className="large-section-item-value"
          dangerouslySetInnerHTML={{ __html: props.value }}
        ></div>
        {!!props.tags.length && (
          <div className="large-section-item-tags">
            {`#${props.tags.join(" #")}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
