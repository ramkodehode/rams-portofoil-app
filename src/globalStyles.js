import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

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

export const FormButton = styled.form``;

export const Button = styled.a`
  border-radius: 4px;
  text-decoration: none;
  background: ${({ primary }) => (primary ? '#0a192f' : 'red')};
  display: ${({ displayButton }) => (displayButton ? 'visible' : 'none')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 1.5px solid #61dafb;
  color: #61dafb;
  cursor: pointer;

  &:hover {
    transition: background 500ms;
    background-color: #0d213f;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
