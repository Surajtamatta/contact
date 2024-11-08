import styled from "styled-components";
import {ReactComponent as Mouse} from '../../../assets/svg/mouse.svg'
import {ReactComponent as Backgroundimg } from '../../../assets/svg/background.svg'
import { motion } from "framer-motion"

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  overflow-x: hidden;

`;

export const Wapper = styled.div`
  width: 100%;
  height: 85vh;
  background-color:  #FDCA09;
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-content: center;
  align-content: end;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;
export const Background = styled(Backgroundimg)`
      width: 95%;
      height: 100%;
      position: absolute;
      top: 0;
      transition: all 0.5s ease-in-out;
  `


export const Text = styled(motion.h1).attrs({
    initial:{ opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: [1.1, 1] },
  transition: { 
    duration: 0.6,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 } 
})`
  font-family: 'roobert-bold';
  font-weight: 700;
  width:100%;
  font-size: clamp(40px, 7vw, 100px); 
  line-height: 1.1;
  margin: 0; 
`;

export const TextWrapper = styled.div`
text-align: center;
display: flex;
width: 100%;
max-width: 800px;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); 
margin: 0; 
`;


export const Images = styled(motion.img).attrs({
  initial: { opacity: 0, y:100 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,          
    ease:'easeIn', 
  },
  viewport: { once: true, amount: 0.5 },
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1/1.58;
`;


export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 245px));
  align-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
  bottom: 0;
  right: 70px;
  grid-column: 2;
  position: relative;
  
  @media (max-width: 900px) {
    right: 50px;
  }
  @media (max-width: 600px) {
    right: 25px;
  }
`


export const MouseIcon=styled(Mouse)`
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
  width: clamp(30px, 5vw, 64px);
`

export const WrapperIcon=styled(motion.div).attrs({
  animate:{
    scale: [0.9,1.1,0.9],
    transition:{
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop"
    }},
    whileHover:{ scale: 1.05},
    whileTap:{ scale: 0.8 }
    })`
  width: 100%;
  display:flex;
  height: 100%;
  justify-content:center;
  align-items:flex-start;
  padding: 30px 0 0 0;
 

`