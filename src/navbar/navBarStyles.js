import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavBarContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  background-color: ${(props) => props.color};
  padding: 35px 0px;
  /* box-shadow: 1px 1px 5px grey; */
`;

export const NavBarLogo = styled.div`
  margin-right: 610px;

  font-family: monospace;
  color: ${(props) => props.color};
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 21px;
  border: 3px solid #61dafb;
  border-radius: 50%;
  font-weight: bold;
  color: #61dafb;
  text-decoration: none;
  :hover,
  :focus {
    color: #61dafb;
    background-color: rgba(192, 192, 192, 0.1);
  }
  cursor: pointer;
`;

export const NavBarElements = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const NavBarStyle = styled.nav`
  font-family: Consolas;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const NavBarLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  color: ${(props) => props.color};
`;

export const NavBarLink = styled(Link)`
  /* border: 1.6px solid white;
  border-radius: 15px; */
  color: #ccd6f6;
  font-size: 16px;
  margin: 10px;
  padding: 7px 15px;

  text-decoration: none;
  :hover,
  :focus {
    color: #61dafb;
  }

  :before {
    content: '<';
    color: #61dafb;
  }
  :after {
    content: '/>';
    color: #61dafb;
  }
`;

export const Photo = styled.figure``;
