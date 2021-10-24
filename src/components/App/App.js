import { BrowserRouter } from "react-router-dom";

import Theme from "../../styles/theme";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";
import Hero from "../Hero/Hero";
import BgAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import Acomplishments from "../Acomplishments/Acomplishments";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <AboutMe />
          <Education />
          <Technologies />
          <Experience />
          <Projects />
          <Acomplishments />
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
