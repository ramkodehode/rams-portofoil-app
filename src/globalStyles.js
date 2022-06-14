import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

 } 
 body {
  background-color: #0a192f;
 
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: #61dafb;
  border: 1.5px solid #61dafb;
  border-radius: 10%;
  width: 80px;
  font-size: 14px;
  margin: 10px;
  padding: 10px 5px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s all ease;

  :hover,
  :focus {
    color: #61dafb;
    background-color: rgba(192, 192, 192, 0.1);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
