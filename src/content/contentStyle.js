import styled from 'styled-components';

export const Content = styled.div`
  font-family: Consolas;
  display: flex;
  justify-content: ;
  flex-direction: column;
  background-color: ${(props) => props.color};
  width: 100%;

  /* box-shadow: 1px 1px 5px grey; */
`;

export const Elements = styled.div`
  margin-top: 30px;
  margin-left: 90px;
`;

export const Intro = styled.div`
  display: flex;
  :before {
    content: '</';
    color: #3bc9f5;
  }
  :after {
    content: '>';
    color: #3bc9f5;
  }

  color: orange;
  font-size: 21px;
`;

export const Name = styled.p`
  /* font-family: Lucida Console; */
  font-weight: bold;
  color: #8892b0;
  font-size: 56px;
  margin-top: 20px;
  width: 80%;
  :before {
    content: '</';
    color: #3bc9f5;
  }
  :after {
    content: '>';
    color: #3bc9f5;
  }
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
  color: #8892b0;
  display: flex;
  flex-direction: column;
  width: 80%;
`;
