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
        I am a Software Engineer. I like to design and develop mobile
        applications. Currently residing in Pune, India.
      </SectionText>
      <Button>
        <a
          href="https://drive.google.com/file/d/1gDjCsL3Z6W0ZwJSP8iw8RzHWdkN_0r8s/view?usp=sharing"
          target="_blank"
          style={{ color: "#fff" }}
        >
          Hire me!
        </a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
