import {
  GradiendtTextWrapper,
  IconContainar,
  Description,
  EmtyDiv,
  LeftWrapper,
  LeftSideIcon,
  SpreadAcademyContainer,
  SpreadAcademyWrapper,
  SpreadAcademySection,
  SpreadAcademyDescription,
  RightWrapper,
  RightWrapperAfter,
  RightWrapperBefore,
  RightCardImage,
  SmallCard,
  CardImage,
  SpreadAcademyTitle,
  CardText,
} from "./SpreadAcademy.styled";

export function SpreadAcademy() {
  return (
    <div>
      <SpreadAcademySection>
        <IconContainar>
          <LeftSideIcon
            src="https://spreadd.io/assets/home/left-dot-patch.svg"
            alt="Dot icon"
          />
        </IconContainar>
        <SpreadAcademyContainer>
          <SpreadAcademyWrapper>
            <LeftWrapper>
              <GradiendtTextWrapper>Spreadd Academy</GradiendtTextWrapper>
              <SpreadAcademyTitle>Create course and</SpreadAcademyTitle>

              <SpreadAcademyTitle>curriculums for your</SpreadAcademyTitle>
              <SpreadAcademyTitle>collaborators/followers</SpreadAcademyTitle>
              <SpreadAcademyDescription>
                <Description>
                  We have got a host of features that can enable you to
                  skyrocket your
                </Description>
                <Description>
                  workshop and course sales. Empower your collaborators by
                  delivering
                </Description>
                <Description>
                  deeply engaging experience wherever they are, anytime,
                  anywhere.
                </Description>
              </SpreadAcademyDescription>
            </LeftWrapper>
            <EmtyDiv></EmtyDiv>
            <RightWrapper>
              <SmallCard>
                <CardImage
                  src="https://spreadd.io/assets/home/academy.jpg"
                  alt="Academy"
                ></CardImage>
                <CardText>
                  Amazing course, i would definetely recommend
                </CardText>
              </SmallCard>
              <RightCardImage
                src="https://spreadd.io/assets/home/academy.jpg"
                alt="Home"
              ></RightCardImage>
              <RightWrapperBefore src="https://spreadd.io/assets/home/round-patch.svg"></RightWrapperBefore>
              <RightWrapperAfter src="https://spreadd.io/assets/home/dot-patch.svg"></RightWrapperAfter>
            </RightWrapper>
          </SpreadAcademyWrapper>
        </SpreadAcademyContainer>
      </SpreadAcademySection>
    </div>
  );
}
