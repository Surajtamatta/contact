// Hero.js
import React from 'react';
import { Container, Logo, Tagline, CallToAction, Button, Icons, Wrapper } from '../../style/components/Banner';
import logo from '../../assets/svg/Logo.svg'

const Banner = () => {
  return (
    <Container>
     <Wrapper>
     <Logo>
      <img src={logo} alt='logo'/>
      </Logo>
      <Tagline>
        Grow Your Business. <br />
        Build Great Products.
      </Tagline>
      <CallToAction>
        <Button>Book a free call</Button>
      </CallToAction>
     </Wrapper>
     <Icons>

          <img src="path/to/icon1.png" alt="Icon 1" />
          <img src="path/to/icon2.png" alt="Icon 2" />
          <img src="path/to/icon3.png" alt="Icon 3" />
      </Icons>
    </Container>
  );
};

export default Banner;
