import {
  InnerWrapper,
  FirstBox,
  LogoBox,
  LogoImage,
  MainContainer,
  SecondBox,
  WhySpreadTitle,
  SpreadPara,
  SpreadTitle,
  ThirdBox,
  WhyspreadTextBox,
  WhySpreadMainSection,
} from "./Whyspread.styled";

export function Whyspread() {
  return (
    <>
      <WhySpreadMainSection>
        <MainContainer>
          <WhyspreadTextBox>
            <WhySpreadTitle>Why Spreadd?</WhySpreadTitle>
            <p>
              Its time to give your ideas the wings they need. Bring them on to
              Spreadd and see them grow.
            </p>
          </WhyspreadTextBox>
          <InnerWrapper>
            <FirstBox>
              <LogoBox>
                <LogoImage src="https://spreadd.io/assets/home/whyspreadd/noname.svg"></LogoImage>
                <SpreadTitle>No middle-man</SpreadTitle>
                <SpreadPara>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </SpreadPara>
              </LogoBox>
            </FirstBox>
            <SecondBox>
              <LogoBox>
                <LogoImage src="https://spreadd.io/assets/home/whyspreadd/marketplace.svg"></LogoImage>
                <SpreadTitle>NFT marketplace</SpreadTitle>
                <SpreadPara>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </SpreadPara>
              </LogoBox>
            </SecondBox>
            <ThirdBox>
              <LogoBox>
                <LogoImage src="https://spreadd.io/assets/home/whyspreadd/sales.svg"></LogoImage>
                <SpreadTitle>Increase your product sale</SpreadTitle>
                <SpreadPara>
                  Spreadd helps you to get in touch with your brand ambassadors
                  directly. Avoid paying extra cuts to multiple agencies. We are
                  here to save your money.
                </SpreadPara>
              </LogoBox>
            </ThirdBox>
          </InnerWrapper>
        </MainContainer>
      </WhySpreadMainSection>
    </>
  );
}
