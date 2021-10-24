import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        HEY! I AM <br />
        Safin Ghoghabori
      </SectionTitle>
      <SectionText>
        I am a MCA post-gradute student. I like to design and develop web
        applications. Currently residing in Ahmedabad, India.
      </SectionText>
      <Button>Hire me!</Button>
    </LeftSection>
  </Section>
);

export default Hero;
