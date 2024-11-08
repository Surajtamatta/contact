import styled from "styled-components";
import {ReactComponent as Mouse} from '../../../assets/svg/mouse.svg'


export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
`;

export const Background = styled.div`
  width: 100%;
  height: 85vh;
  background-color:  #FDCA09;
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-content: center;
  align-content: end;
  
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;



export const Text = styled.h1`
  font-family: 'roobert-bold';
  font-weight: 700;
  width: 100%;
  max-width: 900px;
  font-size: clamp(40px, 7vw, 100px); 
  line-height: 1.1;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  margin: 0; 
`;


export const Images=styled.img`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 100%;
  aspect-ratio: 1/1.6;
`


export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 245px));
  align-items: flex-end;
  justify-content: flex-end;
  align-content: flex-end;
  bottom: 0;
  right: 75px;
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
  width: clamp(30px, 5vw, 64px);
`

export const WrapperIcon=styled.div`
  width: 100%;
  display:flex;
  height: 100%;
  justify-content:center;
  align-items:flex-start;
  padding: 30px 0 0 0;
 

`