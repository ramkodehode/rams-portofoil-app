import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { Container, Button, FormButton } from '../../globalStyles';
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
} from './Hero.elements';

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
    <InfoSec lightBg={lightBg}>
      <TextWrapper>
        <TopLine lightTopLine={lightTopLine}>{topLine} Jeg heter</TopLine>
        <Heading lightText={lightText}>{headline}Ramanan Subramaniam.</Heading>
        <Subtitle lightTextDesc={lightTextDesc}>
          {description}Jeg liker å bygge ting og er fokusert på webdesign.
        </Subtitle>

        <Button
          id="hero-button"
          href="https://github.com/ramkodehode"
          target={'_blank'}
          displayButton
          primary
        >
          Github <AiFillGithub size={20}></AiFillGithub>
        </Button>
      </TextWrapper>
    </InfoSec>
  );
}

export default Hero;
