import {
  Hamburger as HamburgerWrapper,
  HamburgerInner,
} from "./HamburgerStyle";
import { useNavigate } from "react-router-dom";
import { HeaderLink } from "../Header/HeaderStyle";

function Hamburger({ closeMenu }) {
  const navigate = useNavigate();

  return (
    <HamburgerWrapper>
      <HamburgerInner>
        <HeaderLink to="/home" onClick={closeMenu}>
          Home
        </HeaderLink>
        <HeaderLink to="/courses" onClick={closeMenu}>
          Courses
        </HeaderLink>
        <HeaderLink to="/register" onClick={closeMenu}>
          Register
        </HeaderLink>
      </HamburgerInner>
    </HamburgerWrapper>
  );
}

export default Hamburger;
