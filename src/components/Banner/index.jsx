// Hero.js
import React from 'react';
import { Container,Image,WrapperContent, Logo, Tagline, CallToAction, Button, Icons, Wrapper } from '../../style/components/Banner';
import logo from '../../assets/svg/Logo.svg'
import handes from '../../assets/svg/hands456.svg'
const Banner = () => {
  return (
   <Container>
     <WrapperContent>
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
      <Image src={handes} alt='handesimage'/>
      </Icons>
    </WrapperContent>
   </Container>
  );
};

export default Banner;
