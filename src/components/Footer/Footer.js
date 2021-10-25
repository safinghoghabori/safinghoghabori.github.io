import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillHeart,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

import icon from "../../images/icon.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <div>
          <img src={icon} alt="icon" />
        </div>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:916353949986">+91 6353949986</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:safinghoghabori65@gmail.com">
            safinghoghabori65@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            This site is made with <AiFillHeart /> by{" "}
            <a
              href="https://github.com/safinghoghabori"
              target="_blank"
              style={{ color: "#2196f3" }}
            >
              Safin Ghoghabori
            </a>
            .
          </Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons
            href="https://github.com/safinghoghabori"
            target="_blank"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/safin-ghoghabori"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://twitter.com/GhoghaboriSafin"
            target="_blank"
          >
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
