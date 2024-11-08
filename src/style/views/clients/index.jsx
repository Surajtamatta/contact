
import styled from 'styled-components';
import { motion } from "framer-motion"
export const SectionContainer = styled.section`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @media (max-width:900px){
    padding: 60px 0 0 0;
  }
`;

// Stats Section styling
export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  color: #fff;
`;
export const StatsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  background-color: #000;
  padding: 30px 70px;
  color: #fff;
  gap: 15px;
  @media (max-width: 900px) {
    padding: 30px 45px;
    
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2,1fr);
    padding: 30px 20px;
  }

`;

export const StatItem = styled(motion.div).attrs({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.5,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 } 
})`
  text-align: start;
  color: #fdca09;
  h3 {
    font-family: 'roobert-bold';
    font-size: clamp(14px,4vw,50px);
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: clamp(12px,2vw,20px);
    color: #fff;
    white-space: nowrap;
    margin: 5px 0 0;
  }
  @media (max-width: 768px) {
    p {
      font-size: clamp(12px,2vw,16px);
    }
  }
`;

// Brands Section styling
export const BrandsContainer = styled.div`

  text-align: center;
  margin-top: 50px;
`;

export const Title = styled.h2`
font-family: 'roobert-bold';
font-size: clamp(16px,4vw,44px);
  font-weight: 600;
  padding: 30px 0;
  color: #333;
  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;

export const LogosGrid = styled.div`
  display: grid;
  padding: 50px;
  grid-template-columns: repeat(4, minmax(0, 245px));
  place-items:center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  transition: transform 0.3s ease;
  width:100%;
  aspect-ratio: 1/1;
  border-bottom:${props=>(props.imageid < 4 ? '2px solid #9A9B9B' : 'none')};
  border-left: ${props => [1, 2, 3, 5, 6, 7].includes(props.imageid) 
    ? '2px solid #9A9B9B' 
    : 'none'};
 
`;



export const LogoImg=  styled(motion.img).attrs({
  initial: { opacity: 0, scale: 0.5 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.5,
    ease: "easeIn",
  },
  viewport: { once: true, amount: 0.5 } ,
  whileHover:{ scale: 1.05},
  whileTap:{ scale: 0.8 }
})`

    max-width: 70%;
    height: auto;
`


