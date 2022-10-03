import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from 'react-scroll';
import { homeObjOne, homeObjTwo, homeObjThree } from '../HomePage/Data';

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
} from './NavbarElement.Styles';
import InfoSection from '../InfoSection/InfoSection';

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

  window.addEventListener('resize', showButton);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const toggleAbout = () => {
    scroll.scrollTo(<InfoSection {...homeObjTwo} />);
  };

  const closeandToggleHome = () => {
    scroll.scrollToTop();
    closeMobileMenu();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#61dafb' }}>
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
                <NavLinks to="/home" onClick={closeandToggleHome}>
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
                  onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
                >
                  Prosjekter
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/kontakt" onClick={closeMobileMenu}>
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
