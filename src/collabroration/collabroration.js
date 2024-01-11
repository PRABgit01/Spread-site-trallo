import {
  CollobrationContainer,
  CollobrationIcon,
  CollobrationImage,
  CollobrationSection,
  CollobrationWrapper,
  LeftBox,
  ParagraphBox,
  PartnerBox,
  RightBox,
  RightPartnerContainer,
  SmallIcon,
  TextBox,
  PartnerImage,
  LeftPartnerContainer,
  Title
} from "./collabration.styled";

export function Collobration() {
  return (
    <>
      <CollobrationSection>
        <CollobrationContainer>
          <CollobrationWrapper>
            <CollobrationIcon></CollobrationIcon>
            <LeftBox>
              <CollobrationImage src="https://spreadd.io/9ddc94ee6277c0a5b9f2f46f46464e53.jpg"></CollobrationImage>
            </LeftBox>
            <RightBox>
              <TextBox>We’re as smooth as our collaborations.</TextBox>
              <ParagraphBox>
                We work with creators and brands from Dubai and India. We
                support more than 5+ brands and 200+ creators. We proudly
                facilitate faster growth for global companies in web3 and web3.
              </ParagraphBox>
            </RightBox>
          </CollobrationWrapper>
          <PartnerBox>
          <LeftPartnerContainer>
          <SmallIcon>
            </SmallIcon>
            <Title>Trusted & supported by:</Title>

          </LeftPartnerContainer>
           
            <RightPartnerContainer>
                <PartnerImage src="https://spreadd.io/875dec57a27d2f383819edbcc9944e97.jpg"></PartnerImage>
                <PartnerImage src="https://spreadd.io/f4f4b093b0ebf25d7a22b46e54dd91f6.jpg"></PartnerImage>
                <PartnerImage src="https://spreadd.io/45aece980a0b097c53b252e3074d8c77.jpg"></PartnerImage>
                <PartnerImage src="https://spreadd.io/40e1c51ec8d39bdd6f1f6e6caac5bb04.jpg"></PartnerImage>
                <PartnerImage src="https://spreadd.io/d9d4c5a7d7181156f56f23121c2991bd.jpg"></PartnerImage>
                <PartnerImage src="https://spreadd.io/ca5422c45d79fc2000681b81915e3e14.jpg"></PartnerImage>
                <PartnerImage src="https://spreadd.io/373638128aa96ad233997256bfa2e4ee.jpg"></PartnerImage>
            </RightPartnerContainer>
          </PartnerBox>
        </CollobrationContainer>
      </CollobrationSection>
    </>
  );
}
