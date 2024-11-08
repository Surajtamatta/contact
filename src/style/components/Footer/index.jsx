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
export const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;

  h3 {
    font-family: 'roobert-bold';
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  p, a {
    font-size: 1em;
    color: #fff;
    text-decoration: none;
    margin: 5px 0;
  }

  a:hover {
    color: #ffd700; /* Gold hover color */
  }
`;

export const FooterLogo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    font-size: 1.2em;
    text-decoration: none;
  }

  a:hover {
    color: #ffd700;
  }
`;

export const ContactButton = styled.div`
  background-color: #000;
  border: 1px solid #ffd700;
  padding: 10px 20px;
  font-size: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;

  a {
    font-family: 'roobert-bold';
    color: #fff;
    text-decoration: none;
  }
`;
