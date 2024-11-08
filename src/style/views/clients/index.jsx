
import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  padding: 60px 0;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Stats Section styling
export const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #000;
  padding: 20px 0;
  color: #fff;
`;

export const StatItem = styled.div`
  text-align: center;
  color: #fdca09;

  h3 {
    font-family: 'roobert-bold';
    font-size: 32px;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #fff;
    margin: 5px 0 0;
  }
`;

// Brands Section styling
export const BrandsContainer = styled.div`

  text-align: center;
  margin-top: 50px;
`;

export const Title = styled.h2`
font-family: 'roobert-bold';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
`;

export const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 245px));
  grid-template-rows: repeat(2, minmax(0, 245px));
  place-items:center;

`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  transition: transform 0.3s ease;
  width:100%;
  height: 100%;
  border-bottom:${props=>(props.imageid < 4 ? '2px solid #9A9B9B' : 'none')};
  border-left: ${props => [1, 2, 3, 5, 6, 7].includes(props.imageid) 
    ? '2px solid #9A9B9B' 
    : 'none'};
 

  img {
    width: 100%;
    height: 100%;
    max-width: 180px;
    max-height: 50px;
    &:hover {
    transform: scale(1.05);
  }
  }
`;
