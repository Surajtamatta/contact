// FooterStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px;
  font-size: clamp(12px, 2vw, 24px); 
  @media (max-width: 900px) {
    padding: 45px;
  }
  @media (max-width: 600px) {
    padding: 20px;

  }
`;
export const FooterColumn = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content:space-between;
  align-items: flex-start;
  flex-direction: column;
  gap:${props=>props.position === 'right' ? '25px' : '0'};
 max-width: 500px;
  h3 {
    font-family: 'roobert-bold';
    font-size: clamp(12px, 2vw, 24px); 
    margin-bottom: 30px;
  }
  p, a {
    font-size: clamp(12px, 2vw, 20px); 
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
  }

  a:hover {
    color: #ffd700; /* Gold hover color */
  }
  @media (max-width: 900px) {
    gap:${props=>props.position === 'right' ? '10px' : '0'};
    max-width: 300px;
  }

  @media (max-width: 600px) {
   align-items: center;
   max-width: ${props=>props.position === 'right' ? 'auto' : '100px'};
   gap:${props=>props.position === 'right' ? '10px' : '0'};
   h3 {
    text-align: center;
      }
      p, a {
        text-align: center;
      }
  }
`;

export const FooterRow = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content:space-between;
  align-items: flex-start;
  flex-direction: row; 
  gap: 50px;
  h3 {
    font-family: 'roobert-bold';
    font-size: clamp(12px, 2vw, 24px); 
    margin-bottom: 10px;
  }
  p, a {
    font-size: clamp(12px, 2vw, 20px); 
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
  }
  a:hover {
    color: #ffd700; /* Gold hover color */
  }
  @media (max-width: 600px) {
   flex-direction: column;
   align-items: center;
   gap: ${props=>props.gap === 'gap' ? '5px' : '25px'};
  }
`;



export const FooterRowcontent = styled.div`
  display: flex;
  width: 100%;
  max-width: 350px;
  justify-content:space-between;
  align-items: flex-start;
  flex-direction: row; 
  gap: 50px;
  position: relative;
  @media (min-width: 1200px) {
    right: 7rem;
  }
  
`;

export const FooterLogo = styled.div`
  font-size: clamp(12px, 2vw, 24px); 
  font-weight: bold;
`;

export const Socials = styled.div`
  display: flex;
  gap: 25px;
  a {
    color: #fff;
    font-size: clamp(10px, 2vw, 18px); 
    text-decoration: none;

  }
  a:hover {
    color: #ffd700;
  }

  a svg {
    font-size:20px;
    padding: 5px;
  }

`;

export const ContactButton = styled.div`
  background-color: #000;
  border: 1px solid #ffd700;
  padding: 10px 20px;
  width: 100%;
  max-width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2em;
  font-size: clamp(12px, 2vw, 24px); 
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  a {
    font-family: 'roobert-bold';
    color: #fff;
    text-decoration: none;
  }
`;
