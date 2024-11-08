import styled from "styled-components";


import { motion } from "framer-motion"
export const Container=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
 
`
export const Wrapper=styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 35px 70px;
 
  @media (max-width: 900px) {
    padding: 45px;
  }
  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const LogoContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

`

export const MenuIcon=styled(motion.button).attrs({
  whileHover:{ scale: 1},
  whileTap:{ scale: 0.8 }})`
  display:flex;
  justify-content:center;
  align-items:center;
  /* background-color: #ffffff; */
  background-color: ${(props) => (props.isWhiteBackground ? 'black' : 'white')};  /* Change background based on isWhiteBackground */
  color: ${(props) => (props.isWhiteBackground ? 'white' : 'black')};  /* Change text color based on isWhiteBackground */
  
  padding: 10px;
  border: none;
  aspect-ratio: 1/1;
  font-size: 40px;
  @media (max-width: 900px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 25px;
  }
  svg{
    transform: rotateZ(90deg);
  }
`
export const Logo=styled.img`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const MenuContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const MenuLink=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`