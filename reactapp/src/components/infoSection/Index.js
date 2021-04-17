import React from "react";
import {
  InfoSection,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  TopLine,
  Subtitle,
  ImgWrapper,
  Img,
} from "./infoElement";
import { Container, Button } from "../../globalStyle";
import { Link } from "react-router-dom";

const Index = ({
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
}) => {
  return (
    <>
      <InfoSection lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoRow>
        </Container>
      </InfoSection>
    </>
  );
};

export default Index;
