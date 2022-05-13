import {
  NavBarStyle,
  NavbarLink,
  NavLogo,
  Nav,
  NavbarContainer,
} from "./NavbarElement.Styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>R</NavLogo>
          <NavbarLink to="/">Om meg</NavbarLink>
          <NavbarLink to="/services">Arbeid</NavbarLink>
          <NavbarLink to="aboutus">Erfaring</NavbarLink>
          <NavbarLink to="contact">Kontakt</NavbarLink>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
