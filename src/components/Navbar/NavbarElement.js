import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import { animateScroll as scroll } from "react-scroll";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "./../../pages/HomePage/Data";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./NavbarElement.styles";
import InfoSection from "../InfoSection/InfoSection";

function Navbar({ displayButton }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleAbout = () => {
    scroll.scrollTo(<InfoSection {...homeObjTwo} />);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#61dafb" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/home" onClick={toggleHome}>
                  Hjem
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="ommeg"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-40}
                >
                  Om meg
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="/prosjekter"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                >
                  Prosjekter
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/kontakt">
                    <Button displayButton primary>
                      Kontakt
                    </Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/kontakt">
                    <Button
                      displayButton
                      onClick={closeMobileMenu}
                      fontBig
                      primary
                    >
                      Kontakt
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
