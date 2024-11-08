import React ,{useRef}from 'react'
import hande1 from '../../assets/svg/hande1.svg'
import hande2 from '../../assets/svg/hande2.svg'
import hande3 from '../../assets/svg/hande3.svg'
import { motion } from "framer-motion"

import { Container,Background,TextWrapper,Wapper, Text ,Content,Images,MouseIcon,WrapperIcon} from '../../style/views/hero'
const Hero = ({ contactRef }) => {
  
  const handleMouseIconClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Contact section ref is not available yet.");
    }
  };
  return (
    <Container>
        <Wapper>
          <Background/>
          
          <TextWrapper>
            <Text>
             We would love to <br/> hear from you.
            </Text>
          </TextWrapper>
          
             <Content>
                <Images src={hande1} alt='hande image 1' style={{transitionDelay:1}}/>
                <Images src={hande2} alt='hande image 1' style={{transitionDelay:2}} />
                <Images src={hande3} alt='hande image 1' style={{transitionDelay:3}} />
            </Content>
        </Wapper>
            <WrapperIcon>
                <MouseIcon onClick={handleMouseIconClick} />
            </WrapperIcon>   
    </Container>
  )
}

export default Hero