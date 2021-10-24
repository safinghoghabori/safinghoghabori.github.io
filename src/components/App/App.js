import { BrowserRouter } from "react-router-dom";

import Theme from "../../styles/theme";
import { Layout } from "../../layout/Layout";
import { Section } from "../../styles/GlobalComponents";
import Hero from "../Hero/Hero";
import BgAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import Timeline from "../TimeLine/TimeLine";
import Acomplishments from "../Acomplishments/Acomplishments";

function App() {
  return (
    <BrowserRouter>
      <Theme>
        <Layout>
          <Section grid>
            <Hero />
            <BgAnimation />
          </Section>
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </Layout>
      </Theme>
    </BrowserRouter>
  );
}

export default App;
