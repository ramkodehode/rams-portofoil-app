import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};
  padding: 35px 0px;
  /* box-shadow: 1px 1px 5px grey; */
`;

export const NavBarStyle = styled.nav`
  font-family: Consolas;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const NavBarLogo = styled.div`
  font-family: monospace;

  color: ${(props) => props.color};
  text-decoration: none;
  font-size: 21px;
  flex-direction: column;
  margin-left: 20px;
  border: 3px solid red;
  border-radius: 50%;
  padding: 12px 20px;
  font-weight: bold;
  text-decoration: none;
  :hover,
  :focus {
    color: white;
  }
  cursor: pointer;
`;

export const NavBarLinkWrapper = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: row;
  margin-right: 10px;
  color: ${(props) => props.color};
`;

export const NavBarLinkWrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NavBarLink = styled(Link)`
  /* border: 1.6px solid white;
  border-radius: 15px; */
  color: orange;
  font-size: 16px;
  margin: 10px;
  padding: 7px 15px;

  text-decoration: none;
  :hover,
  :focus {
    color: white;
  }

  :before {
    content: '</';
    color: red;
  }
  :after {
    content: '>';
    color: red;
  }
`;

export const NavBarElements = styled.div`
  display: flex;
  width: 70%;
`;

export const Photo = styled.figure``;
