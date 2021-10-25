import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillCode,
} from "react-icons/ai";

import {
  BottomNav,
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  StyledMenu,
} from "./HeaderStyles";

import icon from "../../images/icon.png";

const Header = ({ open }) => (
  <Container>
    <Div1>
      <Link to="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <img src={icon} alt="icon" />
        </a>
      </Link>
    </Div1>

    <Div2 open={open}>
      <li>
        <a href="#about">
          <NavLink>About</NavLink>
        </a>
      </li>
      <li>
        <a href="#education">
          <NavLink>Education</NavLink>
        </a>
      </li>
      <li>
        <a href="#technologies">
          <NavLink>Technologies</NavLink>
        </a>
      </li>
      <li>
        <a href="#experience">
          <NavLink>Experience</NavLink>
        </a>
      </li>
      <li>
        <a href="#projects">
          <NavLink>Projects</NavLink>
        </a>
      </li>
      <li>
        <a href="#accomplishments">
          <NavLink>Accomplishments</NavLink>
        </a>
      </li>
    </Div2>
    {/* <Div3>
      <SocialIcons href="https://github.com/safinghoghabori" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/safinghoghabori" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/safinghoghabori" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3> */}
  </Container>
);

export default Header;
