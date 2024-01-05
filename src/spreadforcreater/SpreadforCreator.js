import {
  GradientCreatorText,
  CustomerDescription,
  CreatorCustomerDescription,
  EmtyDiv,
  CreatorWrapper,
  CreatorSection,
  CreatorImage,
  CreatorLeftSideContainer,
  CustomerCount,
  PinkLineDiv,
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
          <RightIcon src="https://spreadd.io/assets/home/left-dot-patch.svg"></RightIcon>
        </RightSideIconContainer>
        <CreatorWrapper>
          <CreatorInnerWrapper>
            <CreatorLeftSideContainer>
              <PinkLineDiv>100+ curated products</PinkLineDiv>
              <HappyCustomerCard>
                <CustomerCount>100+</CustomerCount>
                <CustomerDescription>Happy Customers 😍</CustomerDescription>
              </HappyCustomerCard>
              <CreatorImage src="https://spreadd.io/assets/home/iphone.png"></CreatorImage>
            </CreatorLeftSideContainer>
            <EmtyDiv></EmtyDiv>
            <CreatorRightSideContainer>
              <GradientCreatorText>Creator Store</GradientCreatorText>
              <CreatorStoreHeading>
                <CreatorHeading>Curate your</CreatorHeading>
              </CreatorStoreHeading>
              <CreatorStoreHeading>
                <CreatorHeading>products and turn</CreatorHeading>
              </CreatorStoreHeading>
              <CreatorStoreHeading>
                <CreatorHeading>your content shop-</CreatorHeading>
              </CreatorStoreHeading>
              <CreatorStoreHeading>
                <CreatorHeading>able</CreatorHeading>
              </CreatorStoreHeading>
              <CreatorCustomerDescription>
                <p>Apply to create your own store. You can choose brands</p>
                <p>and display their product within your own store. You can</p>
                <p>get paid on every sale brand makes through you.</p>
              </CreatorCustomerDescription>
            </CreatorRightSideContainer>
          </CreatorInnerWrapper>
        </CreatorWrapper>
      </CreatorSection>
    </>
  );
}
