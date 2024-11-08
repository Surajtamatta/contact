// HeroStyles.js
import styled from 'styled-components';

export const Container = styled.section`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5b942; /* Yellow background color */
  color: #000;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
  left: -5%;
  align-items: center;
  padding: 100px 0;

  @media (max-width: 900px) {
    padding: 50px 0;
  }
  @media (max-width: 600px) {
    padding: 25px 0;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width:100%;
  max-width: 489px;
  img {
    width: 100%;
    ;
  }

`;

export const Tagline = styled.div`
  font-family: 'roobert-bold';
  font-size: clamp(16px, 5vw, 44px); 
  width: 100%;
  max-width: 431px;
  padding: 0 20px;
  font-weight: bold;
  color: #000;
`;

export const CallToAction = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
font-family: 'roobert-bold';
 font-size: clamp(12px, 3vw, 24px); 
  background-color: #000;
  color: #fff;
  padding: 20px 50px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-right: 20px;

  &:hover {
    background-color: #333;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;

  img {
    width: 60px;
    height: 60px;
  }
`;
