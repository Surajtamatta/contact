import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh; /* Center the spinner on the screen */
`;

export const SpinnerCircle = styled(motion.div).attrs({
  animate:{
    rotate: 360,
  },
  transition:{
    repeat: Infinity,
    duration: 1,
    ease: "linear",
  }
})`
  width: 60px;
  height: 60px;
  border: 8px solid #e3e3e3;
  border-top: 8px solid #3498db; /* Color for the animated section */
  border-radius: 50%;
`;
