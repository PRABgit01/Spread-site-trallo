import styled from "styled-components";

export const CreatorSection = styled.div`
  background-color: #fff6f6;
  max-height: 525px;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
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
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;
export const CreatorRightSideContainer = styled.div`
  max-width: 50%;
  width: 100%;
  position: relative;
  display: flex;
  padding: 66px 0px 8px 4px;
  flex-direction: column;
  @media (max-width: 700px) {
    max-width: 100%;
  }
`;
export const CreatorImage = styled.img`
  max-width: 394px;
  width: 82%;

  @media screen {
    width: 100%;
  }
`;

export const EmtyDiv = styled.div`
  width: 100px;
  padding: 0px 33px 0px 17px;
`;

export const RightSideIconContainer = styled.div`
  position: absolute;
  top: 442px;
  right: 0px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const RightIcon = styled.img``;

export const PinkLineDiv = styled.div`
  width: 421%;
  max-width: 429%;
  position: relative;
  left: -1256px;
  bottom: -359px;
  /* top: 20px; */
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
  @media (max-width: 700px) {
    display: none;
  }
`;
export const HappyCustomerCard = styled.div`
  position: absolute;
  right: -17px;
  top: 64px;
  padding: 8px;
  background: white;
  box-shadow: 0px 0px 0px;
  @media (max-width: 700px) {
    font-size: 9.4px;
    line-height: 21px;
    right: 6px;
    top: -22px;
  }
`;

export const CustomerCount = styled.h1`
  font-size: 12.4px;
  line-height: 14px;
  color: rgb(255, 78, 83);
  @media (max-width: 700px) {
    font-size: 10.4px;
    line-height: 12px;
  }
`;

export const GradientCreatorText = styled.div`
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  color: black;
  background: linear-gradient(50deg, white, transparent);
  padding: 8px 12px;
  margin-bottom: 25px;
  width: max-content;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) translateX(0px);
  @media (max-width: 700px) {
    padding: 9px 17px;
    font-size: 9px;
  }
`;

export const CustomerDescription = styled.p`
  margin: 0px;
  font-size: 12.4px;
  @media (max-width: 700px) {
    font-size: 8.4px;
  }
`;

export const CreatorStoreHeading = styled.div`
  padding: 7px 1px 9px;
  @media (max-width: 700px) {
    padding: 0px 0px 9px;
  }
`;

export const CreatorCustomerDescription = styled.p`
  font-size: 13px;
  padding: 0px;
  color: #212b36;
`;

export const CreatorHeading = styled.span`
  font-size: 38px;
  font-weight: 400;
  line-height: 10px;
  @media (max-width: 700px) {
    line-height: 0px;
    font-size: 27px;
  }
`;

export const CreatorInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5% 0% 0%;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: stretch;
  }
`;
