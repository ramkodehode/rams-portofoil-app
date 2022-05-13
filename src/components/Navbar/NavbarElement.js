import {
  NavBarStyle,
  NavBarLink,
  NavBarLogo,
  NavBarLinkWrapper,
  NavBarContainer,
  NavBarLinkWrapperContainer,
  NavBarElements,
} from './NavbarElement.Styles';
import {useState} from 'react';

// Functions used on page
const handleClick = () => {};

const Navbar = () => {
  const [color, setColor] = useState();

  return (
    <>
      <NavBarContainer color={color ? '#0A192F' : '#0A192F'}>
        <NavBarLogo>R</NavBarLogo>

        <NavBarElements>
          <NavBarStyle>
            <NavBarLinkWrapper>
              <NavBarLink to="/">Om meg</NavBarLink>
              <NavBarLink to="/services">Arbeid</NavBarLink>
              <NavBarLink to="aboutus">Erfaring</NavBarLink>
              <NavBarLink to="contact">Kontakt</NavBarLink>
            </NavBarLinkWrapper>
          </NavBarStyle>
        </NavBarElements>
      </NavBarContainer>
    </>
  );
};

export default Navbar;
