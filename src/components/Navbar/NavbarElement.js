import { useState } from "react";
import { CVButton } from "../Button/Button.styles";
import {
  NavbarLink,
  NavLogo,
  Nav,
  NavMenu,
  NavbarContainer,
  NavLogoContainer,
  NavItem,
  MobilIcon,
} from "./NavbarElement.styles";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoContainer>
            <NavLogo to="/">R</NavLogo>
          </NavLogoContainer>
          <MobilIcon onClick={handleClick}>
            {click ? <FaTimes size={35} /> : <FaBars size={35} />}
          </MobilIcon>

          <NavMenu>
            <NavItem>
              <NavbarLink to="/">Om meg</NavbarLink>
            </NavItem>
            <NavItem>
              <NavbarLink to="aboutus">Erfaring</NavbarLink>
            </NavItem>

            <NavItem>
              <NavbarLink to="/services">Prosjekter</NavbarLink>
            </NavItem>

            <NavItem>
              <NavbarLink to="contact">Kontakt</NavbarLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
