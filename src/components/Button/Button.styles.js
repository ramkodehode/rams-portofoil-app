import styled from "styled-components";

export const CVButton = styled.a`
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
`;
