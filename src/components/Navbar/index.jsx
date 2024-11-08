import React from 'react'
import logo from '../../assets/svg/Logo.svg'
import {Container,Wrapper,LogoContainer,MenuContainer,MenuLink,Logo,MenuIcon} from '../../style/components/Navbar'
const Navbar = () => {
  return (
   <Container>
    <Wrapper>
    <LogoContainer>
    <Logo src={logo} alt='logo'/>
    </LogoContainer>
    <LogoContainer>
    <MenuIcon/>
    </LogoContainer>
    {/* <MenuContainer>
      <MenuLink href="#">Home</MenuLink>
      <MenuLink href="#">About</MenuLink>
      <MenuLink href="#">Contact</MenuLink>
    </MenuContainer> */}
    </Wrapper>
    
   </Container>
  )
}

export default Navbar