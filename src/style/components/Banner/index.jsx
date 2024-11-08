// HeroStyles.js
import styled from 'styled-components';
import { motion } from "framer-motion"

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  color: #000;
  position: relative;
  padding: 60px 0;

`;


export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5b942; /* Yellow background color */
  color: #000;
  position: relative;

`;


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  place-content: flex-end;
  justify-items: flex-end;
  position: relative;
   left: -3%;
   grid-gap: 40px;
   align-items: center;
   max-width: 1300px;
   padding:80px 0 150px 0;
    @media (max-width: 900px) {
      grid-template-columns: 1fr 1.2fr;
      padding:80px 0 120px 0;
    }
    @media (max-width: 600px) {

      padding:60px 0 100px 0;
    }




`;
export const Logo = styled(motion.div).attrs({
  initial: { opacity: 0, x: -100 }, 
  whileInView: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.6,
    ease: "easeOut",
  },
  viewport: { once: true, amount: 0.5 } 
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  position: relative;
  max-width: 450px;
  img {
    width: 100%;
    position: absolute;

  }

`;

export const Tagline = styled(motion.h3).attrs({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.6,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 }
  })`
  font-family: 'roobert-bold';
  font-size: clamp(16px, 3vw, 38px); 
  width: 100%;
  max-width: 400px;
  font-weight: bold;
  color: #000;
`;

export const CallToAction = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 250px;
  padding: 0 20px;
  @media (max-width: 900px) {
     position: absolute;
     left: 5%;
     bottom: 5%;
     max-width: 200px;
     padding: 10px;
     
    }
    @media (max-width: 600px) {
     max-width: 150px;
     padding: 5px;
    }
`;

export const Button = styled(motion.button).attrs({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.5,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 } ,
  whileHover:{ scale: 1.05},
 whileTap:{ scale: 0.8 }})`
font-family: 'roobert-bold';
 font-size: clamp(12px, 2vw, 20px); 
  background-color: #000;
  white-space: nowrap;
  color: #fff;
  width: 100%;
  padding: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
  @media (max-width: 900px) {
     max-width: 200px;
     padding: 10px;
     
    }
    @media (max-width: 600px) {
     max-width: 120px;
     padding: 10px;
    }
`;

export const Icons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  position: relative;
`;

export const Image = styled(motion.img).attrs({
  initial: { opacity: 0, x:100 },
  whileInView: { opacity: 1, x: 0 },
  transition: {
    duration: 0.6,          
    ease:'easeIn', 
  },
  viewport: { once: true, amount: 0.5 },
})`

  position: absolute;
  bottom: 0;

    @media (max-width: 900px) {

      width: 100%;
      max-width: 300px;
      position: absolute;
      bottom: 0;

    }
    @media (max-width: 600px) {
      width: 100%;
      max-width: 200px;
      position: absolute;
      bottom: 0;

    } 
`;
