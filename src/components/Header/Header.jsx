import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../utils/styles/generalStyles";
import Hamburger1 from "../Hamburger/Hamburger";

import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoImg,
  Hamburger,
  HeaderLink,
  HeaderNav,
} from "./HeaderStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleCloseMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Link to="/home">
            <LogoImg />
          </Link>
          <Hamburger onClick={() => setOpen(!open)} />
          <HeaderNav>
            <HeaderLink to="/home">Home</HeaderLink>
            <HeaderLink to="/courses">Courses</HeaderLink>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </HeaderNav>
        </HeaderInner>
      </HeaderWrapper>

      {open && <Hamburger1 closeMenu={handleCloseMenu} />}
    </>
  );
};

export default Header;
