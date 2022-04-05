import styled from 'styled-components';

export const Content = styled.div`
  font-family: Consolas;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props) => props.color};
  width: 100%;
  margin-top: 30px;

  /* box-shadow: 1px 1px 5px grey; */
`;

export const Elements = styled.div`
  margin-top: 30px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 400px;
  height: 400px;
`;

export const IntroTwo = styled.div`
  width: 94%;
  justify-content: end;
  display: flex;

  color: #8892b0;
  font-size: 21px;
`;
export const IntroOne = styled.div`
  width: 97%;
  justify-content: start;
  display: flex;
  color: #61dafb;
  font-size: 21px;
`;

export const Name = styled.p`
  /* font-family: Lucida Console; */
  font-weight: bold;
  color: #ccd6f6;
  font-size: 48px;
  margin-top: 6px;
  margin-bottom: 6px;
  width: 80%;
`;

export const Heading = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3em;
  color: rgb(212, 212, 212);
  color: linear-gradient(
    43deg,
    rgba(212, 212, 212, 1) 0%,
    rgba(159, 159, 159, 1) 100%
  );
`;

export const AboutMe = styled.p`
  color: red;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
