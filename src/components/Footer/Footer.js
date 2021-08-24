import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
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
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:57+310-798-2218">(57)310-798-2218</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:julianfigueroatorres@gmail.com">julianfigueroatorres@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Creating Techy Stuff</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Julian-Figueroa">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/juli%C3%A1n-figueroa-torres-90421231/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
