import styled from "styled-components";

export const CampaignSection = styled.section`
  position: sticky;
  top: 0px;
  right: 0px;
  background: rgb(255, 246, 246);
  padding: 100px 0px;
`;

export const CampaignContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0px auto;
  @media (max-width: 991px) {
    max-width: 980px;
    padding: 0px 30px;
  }
`;

export const CampaignMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    max-width: 980px;
    
  }
`;

export const CampaignIcon = styled.div`
  position: absolute;
  top: 18px;
  right: 0px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const AvilableSolutionText = styled.h5`
  font-weight: 600;
  font-size: 12px;
  margin: 7px;
  line-height: 1;
  color: white;
`;
export const Description = styled.h5`
  font-weight: 600;
  font-size: 7px;
  margin: 7px;
  color: white;
`;

export const RightCampaign = styled.div`
  position: relative;
  max-width: 48%;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const LeftCampaign = styled.div`
  position: relative;
  max-width: 48%;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const IconSvg = styled.img``;
export const SettingImg = styled.img`
  position: absolute;
  right: 30px;
  top: -15px;
`;
export const StyledIconImgDiv = styled.div`
  position: absolute;
  right: 30px;
  top: -15px;
`;

export const StyledIconImg = styled.img`
  vertical-align: middle;
  border-style: none;
`;
export const AvilableSolution = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0.46%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  backdrop-filter: blur(12.2941px);
  border-radius: 5px;
  width: max-content;
  padding: 15px 10px 10px;
  position: absolute;
  top: 10px;
  bottom: unset;
  left: 50%;
`;

export const MainImageContainer = styled.div`
  vertical-align: baseline;
  max-width: 440px;
  width: 74%;
`;
export const MainImage = styled.img`
  vertical-align: middle;
  border-style: none;
  max-width: 450px;
  width: 100%;
`;

export const EasyMethod = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 0.46%,
    rgba(255, 255, 255, 0.1) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 8px;
  backdrop-filter: blur(12.2941px);
  border-radius: 5px;
  width: max-content;
  padding: 15px 10px 10px;
  position: absolute;
  bottom: -20px;
  left: -20px;
`;
export const LeftDivInside = styled.div`
  margin: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: baseline;
`;

export const CampaignMarketplace = styled.div`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 400;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
`;

export const ShadedText = styled.div`
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  width: max-content;
  @media (max-width: 991px) {
    font-size: 10px;
  }
`;

export const TitleText = styled.h3`
  font-size: 41px;
  font-weight: 400;
  text-align: start;
  @media (max-width: 991px) {
    font-size: 28px;
  }
`;

export const LeftDiscription = styled.p`
  width: 100%;
  max-width: 350px;
  font-size: 14px;
  text-align: start;
  @media (max-width: 991px) {
    font-size: 13px;
  }
`;

export const IconsImage = styled.img``;
