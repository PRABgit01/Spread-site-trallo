import {
  GradiendtTextWrapper,
  IconContainar,
  Description,
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
  SpreadTitleWrapper,
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
              <SpreadTitleWrapper>
                <SpreadAcademyTitle>
                  Create course and curriculums for your collaborators/followers
                </SpreadAcademyTitle>
              </SpreadTitleWrapper>
              <SpreadAcademyDescription>
                <Description>
                  We have got a host of features that can enable you to
                  skyrocket your workshop and course sales. Empower your
                  collaborators by delivering deeply engaging experience
                  wherever they are, anytime, anywhere.
                </Description>
              </SpreadAcademyDescription>
            </LeftWrapper>
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
