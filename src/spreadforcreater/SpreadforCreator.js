import {
  GradientCreatorText,
  CustomerDescription,
  CreatorCustomerDescription,
  CreatorWrapper,
  CreatorSection,
  CreatorImage,
  CreatorLeftSideContainer,
  CustomerCount,
  CreatoProductLine,
  RightSideIconContainer,
  CreatorRightSideContainer,
  RightIcon,
  CreatorInnerWrapper,
  CreatorStoreHeading,
  CreatorHeading,
  HappyCustomerCard,
} from "./SpreadforCreator.styled";

export function SpreadforCreator() {
  return (
    <>
      <CreatorSection>
        <RightSideIconContainer>
          <RightIcon src="https://spreadd.io/assets/home/left-dot-patch.svg" alt="dot patch"></RightIcon>
        </RightSideIconContainer>
        <CreatoProductLine>100+ curated products</CreatoProductLine>
        <CreatorWrapper>
          <CreatorInnerWrapper>
            <CreatorLeftSideContainer>
              <HappyCustomerCard>
                <CustomerCount>100+</CustomerCount>
                <CustomerDescription>Happy Customers 😍</CustomerDescription>
              </HappyCustomerCard>
              <CreatorImage src="https://spreadd.io/assets/home/iphone.png" alt="Phone"></CreatorImage>
            </CreatorLeftSideContainer>
            <CreatorRightSideContainer>
              <GradientCreatorText>Creator Store </GradientCreatorText>
              <CreatorStoreHeading>
                <CreatorHeading>
                  Curate your products and turn your content shop able
                </CreatorHeading>
              </CreatorStoreHeading>
              <CreatorCustomerDescription>
                <p>
                  Apply to create your own store. You can choose brands and
                  display their product within your own store. You can get paid
                  on every sale brand makes through you.
                </p>
              </CreatorCustomerDescription>
            </CreatorRightSideContainer>
          </CreatorInnerWrapper>
        </CreatorWrapper>
      </CreatorSection>
    </>
  );
}
