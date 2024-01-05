import styled from "styled-components";

export const CreatorSection = styled.div`
  background-color: #fff6f6;
  max-width: auto;
  width: 100%;
  max-height: 525px;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  @media (max-width: 991px) {
    align-items: baseline;
  }
`;

export const CreatorWrapper = styled.div`
  background-color: #fff6f6;
  height: fit-content;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 60px 0px 0px;
  @media (max-width: 991px) {
    padding: 0px 0px 0px 0px;
  }
`;

export const LeftImageDiv = styled.div`
  max-width: 48%;
  width: 100%;
  position: relative;
`;

export const CreatorLeftSideContainer = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;
  padding: 0px 69px 1px 0px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CreatorRightSideContainer = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;
  display: flex;
  padding: 0px 0px 0px 28px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
export const CreatorImage = styled.img`
  max-width: 429px;
  width: 100%;
  @media screen {
    width: 100%;
  }
`;

export const RightSideIconContainer = styled.div`
  position: absolute;
  top: 442px;
  right: 0px;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const RightIcon = styled.img``;

export const CreatoProductLine = styled.div`
  width: 100%;
  max-width: 429px;
  position: relative;
  left: 256px;
  background: linear-gradient(
    270deg,
    rgb(240, 97, 86) 0%,
    rgba(240, 97, 86, 0.4) 98.89%
  );
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: white;
  text-align: right;
  padding: 33px 7px;
  z-index: 0;
  display: none;
  @media (max-width: 991px) {
    display: none;
  }
`;

export const HappyCustomerCard = styled.div`
  position: absolute;
  right: 41px;
  top: -11px;
  padding: 8px;
  background: white;
  box-shadow: 0px 0px 0px;
  @media (max-width: 991px) {
    font-size: 9px;
    line-height: 21px;
    right: 91px;
    top: -22px;
  }
`;

export const CustomerCount = styled.h1`
  font-size: 12px;
  line-height: 14px;
  color: rgb(255, 78, 83);
  @media (max-width: 991px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const GradientCreatorText = styled.div`
  font-size: 14px;
  line-height: 1;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  @media (max-width: 991px) {
    padding: 9px 17px;
    font-size: 9px;
  }
`;

export const CustomerDescription = styled.p`
  margin: 0px;
  font-size: 12px;
  @media (max-width: 991px) {
    font-size: 8px;
  }
`;

export const CreatorStoreHeading = styled.div`
  width: 100%;
  max-width: 340px;
  @media (max-width: 991px) {
    padding: 0px 0px 9px;
  }
`;

export const CreatorCustomerDescription = styled.p`
  width: 100%;
  max-width: 340px;
  font-size: 14px;
  padding: 0px;
  color: #212b36;
`;

export const CreatorHeading = styled.span`
  font-size: 38px;
  font-weight: 400;
  line-height: 31px;
  @media (max-width: 991px) {
    line-height: 32px;
    font-size: 27px;
  }
`;

export const CreatorInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 0% 0%;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
