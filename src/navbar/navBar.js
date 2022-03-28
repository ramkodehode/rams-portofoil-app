import {
  NavBarStyle,
  NavBarLink,
  NavBarLogo,
  NavBarLinkWrapper,
  NavBarContainer,
  NavBarLinkWrapperContainer,
  NavBarElements,
} from './navBarStyles';
import {useState} from 'react';

// Functions used on page
const handleClick = () => {};

const NavBar = () => {
  const [color, setColor] = useState();

  return (
    <NavBarContainer color={color ? '#0A192F' : '#0A192F'}>
      <NavBarElements>
        <NavBarLogo>R</NavBarLogo>
        <NavBarStyle>
          <NavBarLinkWrapperContainer>
            <NavBarLinkWrapper>
              <NavBarLink to="/">Om meg</NavBarLink>
              <NavBarLink to="/services">Arbeid</NavBarLink>
              <NavBarLink to="aboutus">Erfaring</NavBarLink>
              <NavBarLink to="contact">Kontakt</NavBarLink>
            </NavBarLinkWrapper>
          </NavBarLinkWrapperContainer>
        </NavBarStyle>
      </NavBarElements>
    </NavBarContainer>
  );
};

export default NavBar;
