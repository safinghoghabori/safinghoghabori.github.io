import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { BsFillBagFill } from "react-icons/bs";
import { experienceData } from "../../constants/constants";

const Experience = () => {
  return (
    <Section id="experience">
      <SectionDivider />
      <br />

      <SectionTitle>Experience</SectionTitle>
      <VerticalTimeline>
        {experienceData.map((data) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)",
              color: "rgba(255, 255, 255, 0.5);",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={data.date}
            dateClassName="date_formate"
            iconStyle={{ background: "#2196f3", color: "#fff" }}
            icon={<BsFillBagFill />}
          >
            <h1 className="vertical-timeline-element-title">
              {data.nameOfCompany}
            </h1>
            <h3
              className="vertical-timeline-element-subtitle"
              style={{ color: "rebeccapurple" }}
            >
              {data.designation}
            </h3>
            <br />
            <h5>{data.text}</h5>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Experience;
