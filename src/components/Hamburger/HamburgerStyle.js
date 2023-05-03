import styled from "styled-components";
import { breakpoints, colors } from "../../utils/styles/theme";

export const Hamburger = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.bgSecondary};
  opacity: 0.85;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
