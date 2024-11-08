import styled from 'styled-components';

// Container for the entire section
export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 100vh;
  @media (max-width: 900px) {
    max-height: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  grid-gap: 8%;
  align-items: center;
  padding: 100px;

  @media (max-width: 900px) {
    grid-gap: 3%;
    padding: 50px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 25px;
  }
`;

// Left and right containers
export const LeftContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


export const RightContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
`;

// Form heading
export const FormHeading = styled.h2`
  font-family: 'roobert-bold';
  font-weight: 700;
  width: 100%;
  max-width: 900px;
  font-size: clamp(20px, 4vw, 44px); 
  line-height: 55px;
  text-align: end;
  margin: 0 0  45px 0; 
  @media (max-width: 900px) {
    line-height: 35px;
    margin: 0 0  18px 0; 
  }
`

// Styled Form
export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    gap: 10px;
  }
`;
export const FormItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  max-height: ${props=>props.type === 'textarea' ? 'auto' : '80px'};
  margin-bottom:${props=>props.type === 'textarea' ? '10px' : '0'} ;
  @media (max-width: 900px) {
    max-height: ${props=>props.type === 'textarea' ? 'auto' : '60px'};
  }
`;

// Input styles
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;

  font-weight: 500;
  font-size: clamp(12px, 2vw, 16px); 
  text-indent: 20px;
  padding: 15px 0;
  margin: 0;
  border: 2px solid #101010;
  @media (max-width: 900px) {
    padding: 8px 0;
  }
  
`;
export const Textarea = styled.textarea`
  width: 100%;

  height: 100%;

  padding: 10px;
  font-weight: 500;
  text-indent: 20px;
  padding: 15px 0;
  padding: 20px 0;
  border: 2px solid #101010;
  font-size: clamp(12px, 2vw, 16px); 
  @media (max-width: 900px) {
    padding: 8px 0;
  }
  
`;


// Error message styling
export const ErrorText = styled.div`
  width: 100%;
  color: red;
  margin-top:8px;
  font-size: clamp(10px, 1vw, 14px); 
`;

// Submit button
export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  font-size: clamp(12px, 2vw, 16px); 
  height: 100%;
  max-height: 75px;
  font-weight: bold;
  color: white;
  background-color: #000;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
    transform: scale(1.01);
  }
`;

// Image for Left Container
export const CharacterImage = styled.img`
  width: 100%;
  max-width: 378px;
  height: auto;
  max-width: 300px;
  object-fit: cover;
  position: relative;
  top:6%;
  aspect-ratio: 1/1.78;
  @media (max-width: 900px) {
    max-width: 400px;
  }
`;


export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 622px;
  aspect-ratio: 1/1.4;
  background:#FEF1E0;
  position: relative;
  padding: 25px;
  @media (max-width: 900px) {
    max-width: none;
  }
  @media (max-width: 600px) {

    padding: 50px;
  }
`;

