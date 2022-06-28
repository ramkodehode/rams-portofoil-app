import React from "react";
import {
  ProjectCard,
  ProjectCardInfo,
  ProjectContainer,
  ProjectDesribtion,
  ProjectHeading,
  ProjectIcon,
  ProjectSection,
  ProjectsWrapper,
  ProjectTitle,
} from "./ProjectsElement";
import { AiOutlineFolder } from "react-icons/ai";

const Projects = () => {
  return (
    <ProjectSection>
      <ProjectsWrapper>
        <ProjectHeading>Prosjekter</ProjectHeading>
        <ProjectContainer>
          <ProjectCard to="/github">
            <ProjectCardInfo>
              <ProjectIcon>
                <AiOutlineFolder />
              </ProjectIcon>
              <ProjectTitle>IMDB API Moviesearch </ProjectTitle>
              <ProjectDesribtion>Søkemotor for IMDB</ProjectDesribtion>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard to="/github">
            <ProjectCardInfo>
              <ProjectIcon>
                <AiOutlineFolder />
              </ProjectIcon>
              <ProjectTitle>React Flask Project </ProjectTitle>
              <ProjectDesribtion>En bloggside </ProjectDesribtion>
            </ProjectCardInfo>
          </ProjectCard>
          <ProjectCard to="/github">
            <ProjectCardInfo>
              <ProjectIcon>
                <AiOutlineFolder />
              </ProjectIcon>
              <ProjectTitle>React Counter App </ProjectTitle>
              <ProjectDesribtion>En app som teller</ProjectDesribtion>
            </ProjectCardInfo>
          </ProjectCard>
        </ProjectContainer>
      </ProjectsWrapper>
    </ProjectSection>
  );
};

export default Projects;
