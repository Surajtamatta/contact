import React from 'react'
import { Container,Title,BackgroundWrapper,BackgroundImage,InfoCard,DirectionArrow,Wrapper,InfoWrapper } from '../../style/views/location'
import officeimage from '../../assets/Office.png'
import { IoArrowForwardOutline } from "react-icons/io5";

const Location = () => {
  return (
    <Container>
    <Wrapper>
    <Title>Come stop by our office sometime</Title>
    <BackgroundWrapper>
      <BackgroundImage src={officeimage} alt="Office background" />
      
      <InfoCard>
        <InfoWrapper>
        <h3>New York, USA</h3>
        <p>7626 W. 8th St.<br/>Massapequa, NY 11758</p>
        
        <p className='contactinfo'>
        <a href="mailto:info@dsgnr.com">info@dsgnr.com</a>
        (543) 890 98 </p>
        

        
        <div className="directions">
          GET DIRECTIONS 
          <IoArrowForwardOutline/>
        </div>
        </InfoWrapper>
      </InfoCard>
    </BackgroundWrapper>
    </Wrapper>
  </Container>
  )
}

export default Location