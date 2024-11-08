import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Container for the entire section
export const Container = styled.section`
 width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 100vh;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
justify-content: center;
align-items: center;
  padding: 70px;
  @media (max-width: 900px) {
   padding: 45px;
  }
  @media (max-width: 600px) {
   padding: 20px;
  }
`;

// Title
export const Title = styled.h2`
font-family: 'roobert-bold';
  font-size: clamp(20px, 5vw, 38px); 
  font-weight: bold;
  color: #000;
  margin-bottom: 70px;
  text-align: center;
  @media (max-width: 900px) {
    margin-bottom: 50px;
  }
`;

// Wrapper for the background image and info card
export const BackgroundWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items:flex-start;
  gap: 20px;
  flex-direction: column;
`;

// Background Image
export const BackgroundImage = styled(motion.img).attrs({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: [0.9, 1] },
  transition: { 
    duration: 0.5,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 } 
})`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

// Info Card with animation
export const InfoCard = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.5,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 } 
})`
  position: absolute;
  top: 23%;
  left: 3%;
  width: 20%;
  min-width: 150px;
  aspect-ratio: 1/1.15;
  padding: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: ${fadeIn} 1s ease-out;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


  @media (max-width: 600px) {
    width: 100%;
   position: relative;
   top:0;
   left:0;
   padding: 0;
   aspect-ratio: auto;
   border-radius: 4px;
   border: 2px solid black;
  transition: all .3s ease;
  }

`;

// Arrow Icon (as SVG component)

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content:space-between;
   align-items: flex-start;
   width: 100%;
   aspect-ratio: 1/1;
 

& > h3 {
  font-family: 'roobert-bold';
    font-size: clamp(16px, 2vw, 34px); 
    font-weight: bold;
    color: #000;
  }

  & > p {
    font-size: clamp(14px, 1vw, 24px); 
    color: #696969;
    display: flex;
    flex-direction: column;
    margin: 4px 0;

  }
  .contactinfo {
    font-size: clamp(14px, 1vw, 24px); 
    margin-bottom: 15px;
    color: #000000;
  }

  & > a {
    font-size: clamp(14px, 1vw, 24px); 
    color: #0073e6;
    text-decoration: none;
    display: block;
    margin: 8px 0;
  }

  .directions {
    font-family: 'roobert-bold';
    font-weight: bold;
    display: flex;
    font-size: clamp(14px, 1vw, 24px); 
    align-items: center;
    cursor: pointer;
    color: #000;
    margin-top: 10px;

    &:hover {
      text-decoration: underline;
    }

    svg {
      margin-left: 5px;
    }
  }
  





  @media (max-width: 600px) {
   padding: 30px;
   aspect-ratio: auto;
   gap: 10px;

   & > h3 {
    font-size: clamp(16px, 5vw, 34px); 
  }

  & > p {
    font-size: clamp(14px, 3vw, 24px); 
  }
  .contactinfo {
    font-size: clamp(14px, 3vw, 24px); 
  }

  & > a {
    font-size: clamp(14px, 3vw, 24px); 
  }

  .directions {
    font-size: clamp(14px, 3vw, 24px); 
  }


  }
`


