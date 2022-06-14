import { useState, useEffect } from "react";
import { Button } from "../../globalStyles";
import {
  NavLinks,
  NavLogo,
  Nav,
  NavMenu,
  NavbarContainer,
  NavLogoContainer,
  NavItem,
  MobilIcon,
  NavItemBtn,
  NavBtnLink,
} from "./NavbarElement.styles";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
    else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

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
              <NavLinks to="/om-meg">Om meg</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/prosjekter">Prosjekter</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/kontakt">Kontakt</NavLinks>
            </NavItem>
            <NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/CV">
                    <Button> CV </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/CV">
                    <Button> CV</Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
