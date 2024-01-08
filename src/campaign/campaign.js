import {
  AvilableSolution,
  CampaignContainer,
  CampaignIcon,
  CampaignMainContainer,
  CampaignSection,
  EasyMethod,
  LeftCampaign,
  LeftDivInside,
  MainImage,
  MainImageContainer,
  RightCampaign,
  SettingImg,
  StyledIconImg,
  StyledIconImgDiv,
  AvilableSolutionText,
  Description,
  ShadedText,
  TitleText,
  LeftDiscription,
  IconsImage,
} from "./capmaign.styled";

export function Campaign() {
  return (
    <>
      <CampaignSection>
        <CampaignContainer>
          <CampaignMainContainer>
            <CampaignIcon>
              <IconsImage src="https://spreadd.io/assets/home/left-dot-patch.svg"></IconsImage>
            </CampaignIcon>
            <RightCampaign>
              <AvilableSolution>
                <SettingImg src="https://spreadd.io/assets/home/setting.svg"></SettingImg>
                <AvilableSolutionText>Available solutions</AvilableSolutionText>
              </AvilableSolution>
              <MainImageContainer>
                <MainImage src="https://spreadd.io/assets/home/marketplace.jpg"></MainImage>
              </MainImageContainer>
              <EasyMethod>
                <StyledIconImgDiv>
                  <StyledIconImg src="https://spreadd.io/assets/home/bulb.svg"></StyledIconImg>
                </StyledIconImgDiv>
                <AvilableSolutionText>Easy Methods</AvilableSolutionText>
                <Description>We Have the best ideas for your Brand</Description>
              </EasyMethod>
            </RightCampaign>
            <LeftCampaign>
              <LeftDivInside>
                <CampaignMainContainer>
                  <ShadedText>Campaign marketplace</ShadedText>
                </CampaignMainContainer>
                <TitleText>
                  <span>
                    Participate in campaigns & build relationships with brands
                  </span>
                </TitleText>
                <LeftDiscription>
                  Join our campaign marketplace to deliver content, build strong
                  relationships with brands and receive agreement-based timely
                  payouts.
                </LeftDiscription>
              </LeftDivInside>
            </LeftCampaign>
          </CampaignMainContainer>
        </CampaignContainer>
      </CampaignSection>
    </>
  );
}
