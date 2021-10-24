import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./education.css";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { FaGraduationCap } from "react-icons/fa";
import { educationData } from "../../constants/constants";

const Education = () => {
  return (
    <Section id="education">
      <SectionDivider />
      <br />

      <SectionTitle>Education</SectionTitle>
      <VerticalTimeline>
        {educationData.map((data) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)",
              color: "rgba(255, 255, 255, 0.5);",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={data.year}
            dateClassName="date_formate"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaGraduationCap size="3rem" />}
          >
            <h1 className="vertical-timeline-element-title">{data.title}</h1>
            <h3
              className="vertical-timeline-element-subtitle"
              style={{ color: "rebeccapurple" }}
            >
              {data.college}
            </h3>
            <br />
            <h5>{data.text}</h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Education;
