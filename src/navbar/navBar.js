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

const NavBar = () => {
  const [color, setColor] = useState();

  const handleClick = () => {};

  return (
    <NavBarContainer color={color ? '#20232A' : '#282D3F'}>
      <NavBarElements>
        <NavBarLogo color="orange">R</NavBarLogo>
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
