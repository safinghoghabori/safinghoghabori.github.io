import {
  Section,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "../../styles/GlobalComponents";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I’m a Full-Stack/Mobile Engineer. I have a passion for writing clean and
        modular code. I am also keen on maintaining beautiful and responsive UI.
        <br />
        <br />
        My favourite stack: Javascript, Typescript, React, Redux, Node, Express, MongoDB, React Native, Expo, Android, iOS
        <br />
        <br />
        Nowadays I'm exploring more about Javascript and its different
        frameworks/libraries.
      </SectionText>
    </Section>
  );
};
export default AboutMe;
