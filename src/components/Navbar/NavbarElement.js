import { useState } from "react";
import { CVButton } from "../Button/Button.styles";
import {
  NavLinks,
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
            {click ? <FaTimes /> : <FaBars />}
          </MobilIcon>

          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Om meg</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/services">Prosjekter</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="contact">Kontakt</NavLinks>
            </NavItem>
            <CVButton>CV</CVButton>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
