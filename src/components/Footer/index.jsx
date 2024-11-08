// Footer.js
import React from 'react';
import {
  FooterContainer,
  Wrapper,
  FooterColumn,
  FooterLogo,
  Socials,
  ContactButton,
  FooterRow,
  FooterRowcontent
} from '../../style/components/Footer';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaTwitter ,FaFacebookF,FaGooglePlusG} from "react-icons/fa";
import logo from '../../assets/svg/Logo.svg'
const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
          <FooterRow>
          <FooterColumn position={'right'} >
                  <FooterLogo>
                    <img src={logo} alt="Logo" />
                  </FooterLogo>
                  <p>Dsgnr. is an award-winning creative and design agency based in New York, USA.</p>
                  <ContactButton>
                    <MdMarkEmailUnread />
                    <a href="mailto:info@dsgnr.com">info@dsgnr.com</a>
                  </ContactButton>
          </FooterColumn>

          <FooterRowcontent position={'left'}>
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
            </FooterRowcontent>
          </FooterRow>

        <FooterRow  gap = 'gap'>
          <Socials>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
          </Socials>
          <Socials>
              <a href="#twitter">
                <FaTwitter />
              </a>
              <a href="#facebook">
                <FaFacebookF/>  
              </a>
              <a href="#google">
                <FaGooglePlusG />
              </a>
        </Socials>
      </FooterRow>
      
      </Wrapper>
      
    </FooterContainer>
  );
};

export default Footer;
