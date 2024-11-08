import styled from "styled-components";

import { AiOutlinePause } from "react-icons/ai";

export const Container=styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
 
`
export const Wrapper=styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 35px 100px;
 
  @media (max-width: 900px) {
    padding: 50px;
  }
  @media (max-width: 600px) {
    padding: 25px;
  }
`

export const LogoContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

`
export const MenuIcon=styled(AiOutlinePause)`
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #ffffff;
  transform: rotateZ(90deg);
  padding: 10px;
  aspect-ratio: 1/1;
  font-size: 40px;

`
export const Logo=styled.img`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const MenuContainer=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const MenuLink=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`