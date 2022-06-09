import styled from "styled-components";
import { keyframes } from "styled-components";

export const Content = styled.div`
  font-family: Consolas;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.color};
  width: 100%;
  margin-top: 30px;
  bottom: 20%;

  /* box-shadow: 1px 1px 5px grey; */
`;

export const Elements = styled.div`
  margin-top: 30px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IntroOne = styled.h1`
  width: 97%;
  justify-content: start;
  display: flex;
  color: #61dafb;
  font-size: 21px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
`;

export const Name = styled.h2`
  /* font-family: Lucida Console; */
  font-weight: bold;
  color: #ccd6f6;
  font-size: clamp(90px, 10vw, 80px);
  margin-top: 6px;
  margin-bottom: 6px;
  width: 100%;
`;

const cursorBlink = keyframes`
  0% {background: #0a192f}
  50% {background: #61dafb}
  100% {background: #0a192f}
`;

export const Cursor = styled.div`
  line-height: 17px;
  width: 19px;
  height: 70px;
  float: right;
  margin-top: 15px;
  margin-right: 260px;
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-name: ${cursorBlink};
`;

export const IntroTwo = styled.h3`
  width: 94%;
  justify-content: end;
  display: flex;
  color: #8892b0;
`;

export const Heading = styled.h4`
  margin-top: 3em;
  color: rgb(212, 212, 212);
  font-family: Consolas;
  color: #ccd6f6;
  font-size: 28px;
  :before {
    content: "<";
    color: #61dafb;
  }
  :after {
    content: "/>";
    color: #61dafb;
  }
`;

export const AboutMe = styled.p`
  color: #8892b0;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  float: right;
`;

export const Image = styled.img`
  max-width: 30%;
  height: auto;
  margin-left: 30px;
  float: right;
  border-radius: 3%;
`;
