import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
} from "./InfoSection.element";

function InfoSection({ lightBg, imgStart }) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Home page</TextWrapper>
            </InfoColumn>
            <InfoColumn></InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
