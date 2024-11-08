// Footer.js
import React from 'react';
import {
  FooterContainer,
  Wrapper,
  FooterColumn,
  FooterLogo,
  SocialIcons,
  ContactButton
} from '../../style/components/Footer';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaTwitter ,FaFacebookF,FaGooglePlusG} from "react-icons/fa";
import logo from '../../assets/svg/Logo.svg'
const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
      <FooterColumn>
        <FooterLogo>
          <img src={logo} alt="Logo" />
        </FooterLogo>
        <p>Dsgnr. is an award-winning creative and design agency based in New York, USA.</p>
        <ContactButton>
          <a href="mailto:info@dsgnr.com">info@dsgnr.com</a>
        </ContactButton>
      </FooterColumn>

      <FooterColumn>
        <h3>What We Do</h3>
        <a href="#intro">Intro</a>
        <a href="#home">Home</a>
        <a href="#work">Work</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact Us</a>
      </FooterColumn>

      <FooterColumn>
        <h3>Who We Are</h3>
        <a href="#about">About</a>
        <a href="#news">News</a>
        <a href="#testimonials">Testimonials</a>
      </FooterColumn>

      <SocialIcons>
        <a href="#twitter">🐦</a>
        <a href="#facebook">📘</a>
        <a href="#google">🖹</a>
      </SocialIcons>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
