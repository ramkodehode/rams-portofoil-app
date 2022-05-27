import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #0a192f;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  font-family: Consolas;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  max-width: 1500px;
`;

export const NavLogoContainer = styled.div`
  margin-left: 20px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavLogo = styled(LinkR)`
  border-radius: 50%;
  margin-left: 30px;
  border: 2px solid #61dafb;
  padding: 9px 16px;
  font-family: Consolas;
  font-size: 1.2rem;
  text-align: center;
  position: fixed;
  font-weight: bold;
  color: #61dafb;
  cursor: pointer;
  left: 10px;
  text-decoration: none;

  :hover,
  :focus {
    color: #61dafb;
    background-color: rgba(192, 192, 192, 0.1);
  }
`;

export const MobilIcon = styled.div`
  display: none;

  @media screen and (max-width: 962px) {
    color: #61dafb;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 90vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavbarLink = styled(LinkR)`
  /* border: 1.6px solid white;
  border-radius: 15px; */
  color: #ccd6f6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 14px;

  :hover,
  :focus {
    color: #61dafb;
    transition: 0.5s all ease;
  }

  :before {
    content: "<";
    color: #61dafb;
  }
  :after {
    content: "/>";
    color: #61dafb;
  }
`;

export const Photo = styled.figure``;
