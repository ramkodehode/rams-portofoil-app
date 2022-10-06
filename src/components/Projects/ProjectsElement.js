import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectSection = styled.section`
  background: #0a192f;
  padding: 100px 0 160px;
  justify-content: center;
  text-align: center;
  font-family: monospace;

  @media screen and (max-width: 800) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
  }
`;

export const ProjectsWrapper = styled.body`
  align-items: center;
  margin: 0 auto;
`;

export const ProjectHeading = styled.h1`
  font-family: monospace;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: #ccd6f6;
`;

export const ProjectContainer = styled.text`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectCard = styled(Link)`
  border: 1.5px solid #61dafb;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 240px;
  height: 240px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    &:hover {
      transform: none;
    }
  }
`;

export const ProjectCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  padding: 30px;
  align-items: center;
  color: #8892b0;
`;

export const ProjectTitle = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  color: #ccd6f6;
`;

export const ProjectDesribtion = styled.h1`
  font-size: 14px;
  margin-top: 2px;
`;
export const ProjectIcon = styled.figure`
  color: #61dafb;
  font-size: 40px;
`;
