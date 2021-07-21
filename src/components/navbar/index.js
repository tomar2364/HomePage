import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbarelement";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">Sign In</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/sign.in">Join For Free</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
