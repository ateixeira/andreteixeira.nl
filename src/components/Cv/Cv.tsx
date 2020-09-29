import * as React from "react";
import Header from "./Header";
import Section from "./Section";
import Skill from "./Skill";
import Education from "./Education";
import SmallSectionContent from "./SmallSectionContent";
import Experience from "./Experience";
import { useFetchFromSeed } from "./hooks";
import "./style.scss";

const Cv: React.FC<{}> = (props) => {
  const { data } = useFetchFromSeed();
  return (
    <div className="paper-sheet">
      <Header />
      <div className="content">
        <div className="left-column">
          <Section icon="user" title="about me">
            <div
              className="aboutme"
              dangerouslySetInnerHTML={{ __html: data.aboutme }}
            />
          </Section>
          <Section icon="address-card" title="contact">
            {data.contact?.map((item) => (
              <SmallSectionContent
                key={item.value}
                icon={item.icon}
                iconType={item.iconType}
                value={item.value}
              />
            ))}
          </Section>
          <Section icon="user-plus" title="social">
            {data.social?.map((item) => (
              <SmallSectionContent
                key={item.value}
                icon={item.icon}
                iconType={item.iconType}
                value={item.value}
              />
            ))}
          </Section>
        </div>
        <div className="right-column">
          <Section icon="code-branch" title="experiences">
            {data.experience?.map((item) => (
              <Experience
                key={item.company}
                title={item.title}
                company={item.company}
                place={item.place}
                contact={item.contact}
                phone={item.phone}
                period={item.period}
                tags={item.tags}
                value={item.value}
                icon={item.icon}
              />
            ))}
          </Section>
          <Section icon="hammer" title="skills">
            <div className="skills-section-wrapper">
              {data.skills?.map((item) => (
                <Skill
                  key={item.skill}
                  skill={item.skill}
                  comment={item.comment}
                  score={item.score}
                />
              ))}
            </div>
          </Section>
          <Section icon="landmark" title="education and awards">
            <div className="education-section-wrapper">
              {data.education?.map((item, idx) => (
                <Education
                  key={`item.description_${idx}`}
                  icon={item.icon}
                  iconType={item.iconType}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Cv;
