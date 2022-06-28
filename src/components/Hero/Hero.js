import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
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
  InfoWrapper,
} from "./Hero.elements";

function Hero({
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
  start,
  visible,
}) {
  return (
    <>
      <InfoWrapper>
        <InfoSec lightBg={lightBg}>
          <Container>
            <InfoRow imgStart={imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <TopLine lightTopLine={lightTopLine}>
                    {topLine} Jeg heter
                  </TopLine>
                  <Heading lightText={lightText}>
                    {headline}Ramanan Subramaniam.
                  </Heading>
                  <Subtitle lightTextDesc={lightTextDesc}>
                    {description}Jeg liker å bygge ting og er fokusert på
                    webdesign.
                  </Subtitle>
                  <Link to="/sign-up">
                    <Button big fontBig primary={primary}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper visible={visible} start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </InfoWrapper>
    </>
  );
}

export default Hero;
