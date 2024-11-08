import React from 'react'
import hande1 from '../../assets/svg/hande1.svg'
import hande2 from '../../assets/svg/hande2.svg'
import hande3 from '../../assets/svg/hande3.svg'
import { Container,Background, Text ,Content,Images,MouseIcon,WrapperIcon} from '../../style/views/hero'
const Hero = () => {
  return (
    <Container>
        <Background>
            <Text>
             We would love to <br/> hear from you.
            </Text>
            <Content>
                <Images src={hande1} alt='hande image 1'/>
                <Images src={hande2} alt='hande image 1'/>
                <Images src={hande3} alt='hande image 1'/>
            </Content>
        </Background>
            <WrapperIcon>
                <MouseIcon/>
            </WrapperIcon>   
    </Container>
  )
}

export default Hero