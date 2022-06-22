import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import { AiFillGithub } from "react-icons/ai";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  GitHubLink,
  ImgBorder,
} from "./InfoSection.element";

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  displayButton,
  displayImage,
  start,
  id,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <GitHubLink
                  target="_blank"
                  href="https://github.com/ramkodehode"
                >
                  <Button displayButton={displayButton} primary>
                    {buttonLabel} <AiFillGithub />
                  </Button>
                </GitHubLink>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper displayImage={displayImage} start={start}>
                <ImgBorder>
                  <Img src={img} alt={alt} />
                </ImgBorder>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
